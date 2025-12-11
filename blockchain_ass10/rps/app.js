// ---------- Счётчики игры ----------
let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const actionMsg_p = document.getElementById('action-msg');

const connectBtn = document.getElementById('connectBtn');
const walletAddress_span = document.getElementById('walletAddress');

// ---------- Web3 / контракт ----------
let provider;
let signer;
let contract;

const contractAddress = "0xb8792e9Df97d1B579cEE7DfA51B10ce04a0e5107";

const contractABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "userMove",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "computerMove",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "int8",
        "name": "result",
        "type": "int8"
      }
    ],
    "name": "GameResult",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "BET_AMOUNT",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "_userMove",
        "type": "uint8"
      }
    ],
    "name": "play",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "computerMove",
        "type": "uint8"
      },
      {
        "internalType": "int8",
        "name": "result",
        "type": "int8"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];

// ---------- Вспомогательные функции ----------

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}

function choiceToNumber(choice) {
    // 'r' -> 0, 'p' -> 1, 's' -> 2
    if (choice === 'r') return 0;
    if (choice === 'p') return 1;
    return 2;
}

function numberToChoice(num) {
    // 0 -> 'r', 1 -> 'p', 2 -> 's'
    if (num === 0) return 'r';
    if (num === 1) return 'p';
    return 's';
}

function updateUI(userChoice, computerChoice, result) {
    // result: 1 = win, 0 = draw, -1 = lose
    if (result === 1) {
        userScore++;
    } else if (result === -1) {
        computerScore++;
    }

    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    const smallUser = "user".fontsize(3).sub();
    const smallComp = "comp".fontsize(3).sub();



    if (result === 1) {
        result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} beats ${convertToWord(computerChoice)}${smallComp}. You win!`;
    } else if (result === -1) {
        result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} loses to ${convertToWord(computerChoice)}${smallComp}. You lost...`;
    } else {
        result_p.innerHTML = `${convertToWord(userChoice)}${smallUser} equals ${convertToWord(computerChoice)}${smallComp}. It's a draw.`;
    }

    actionMsg_p.textContent = "Make your move.";
}

// ---------- Подключение кошелька ----------

async function connectWallet() {
  if (!window.ethereum) {
      alert("MetaMask is not installed.");
      return;
  }



    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        // запросить доступ к аккаунтам
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();

        const address = await signer.getAddress();
        walletAddress_span.textContent = `Connected: ${address.slice(0, 6)}...${address.slice(-4)}`;

        // создаём объект контракта
        contract = new ethers.Contract(contractAddress, contractABI, signer);
         actionMsg_p.textContent = "Wallet connected. You can play!";
        console.log("Wallet connected:", address);
    } catch (err) {
        console.error(err);
        alert("Failed to connect wallet.");
    }
}



// ---------- Игра через смарт-контракт ----------

async function game(userChoice) {
    if (!contract) {
        alert("Please connect your wallet first.");
        return;
    }

    try {
        actionMsg_p.textContent = "Sending transaction...";
        result_p.innerHTML = "Waiting for blockchain confirmation...";

        // 0.0001 BNB = 0.0001 ether
        const betAmount = ethers.utils.parseEther("0.0001");

        // отправляем транзакцию
        const tx = await contract.play(choiceToNumber(userChoice), {
            value: betAmount
        });

        console.log("Transaction sent:", tx.hash);

        // ждём майнинга блока
        const receipt = await tx.wait();
        console.log("Transaction confirmed:", receipt.transactionHash);

        // ищем событие GameResult
        const gameEvent = receipt.events.find(e => e.event === "GameResult");

        if (!gameEvent) {
            result_p.innerHTML = "No GameResult event found.";
            actionMsg_p.textContent = "Something went wrong.";
            return;
        }

        const { userMove, computerMove, result } = gameEvent.args;

        // Преобразуем в обычные значения
        const userMoveChoice = numberToChoice(userMove);
        const computerMoveChoice = numberToChoice(computerMove);
        const resultNumber = Number(result);

        updateUI(userMoveChoice, computerMoveChoice, resultNumber);
    } catch (err) {
        console.error(err);
        result_p.innerHTML = "Transaction failed or was rejected.";
        actionMsg_p.textContent = "Try again.";
    }
}

// ---------- Вешаем обработчики кликов ----------

function main() {
    connectBtn.addEventListener('click', connectWallet);

    rock_div.addEventListener('click', () => game('r'));
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', () => game('s'));
}

main();