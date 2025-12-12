const NFT_CONTRACT_ADDRESS = "0xA67d8B5Db3bBFC6770D334B0633B9563c64a32BC"; 

const NFT_ABI = [
    {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "symbol",
            "type": "string"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "ERC721IncorrectOwner",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ERC721InsufficientApproval",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "approver",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidApprover",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidOperator",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidOwner",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "receiver",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidReceiver",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          }
        ],
        "name": "ERC721InvalidSender",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ERC721NonexistentToken",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "OwnableInvalidOwner",
        "type": "error"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "account",
            "type": "address"
          }
        ],
        "name": "OwnableUnauthorizedAccount",
        "type": "error"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "approved",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Approval",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "ApprovalForAll",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_fromTokenId",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_toTokenId",
            "type": "uint256"
          }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "_tokenId",
            "type": "uint256"
          }
        ],
        "name": "MetadataUpdate",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_program",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_grade",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_tokenURI",
            "type": "string"
          }
        ],
        "name": "safeMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "bool",
            "name": "approved",
            "type": "bool"
          }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          }
        ],
        "name": "balanceOf",
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
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "certificates",
        "outputs": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "program",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "grade",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "certificateURI",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "getApproved",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "isApprovedForAll",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "MAX_SUPPLY",
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
        "inputs": [],
        "name": "name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "ownerOf",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "bytes4",
            "name": "interfaceId",
            "type": "bytes4"
          }
        ],
        "name": "supportsInterface",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "symbol",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
          }
        ],
        "name": "tokenURI",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
]; 
// --------------------

// Глобальные переменные для Web3
let provider;
let signer;
let nftContract;
let currentAccount;

// Глобальный массив для хранения всех загруженных сертификатов
let allCertificates = []; 

// HTML Элементы
const connectBtn = document.getElementById('connectBtn');
const walletAddressDisplay = document.getElementById('walletAddress');
const galleryContainer = document.getElementById('nftGallery');
const statusMsg = document.getElementById('statusMsg');

const searchInput = document.getElementById('searchInput');
const filterProgram = document.getElementById('filterProgram');
const minGradeInput = document.getElementById('minGrade');


// // --- A. УТИЛИТЫ ---

/**
 * Конвертирует IPFS-ссылку в URL публичного гейтвея Pinata/IPFS.
 * @param {string} ipfsUrl - IPFS URL (e.g., ipfs://QmW8...).
 * @returns {string} HTTP URL.
 */
function convertIpfsUrl(ipfsUrl) {
    if (ipfsUrl && ipfsUrl.startsWith('ipfs://')) {
        // Используем публичный гейтвей IPFS
        return `https://ipfs.io/ipfs/${ipfsUrl.split('ipfs://')[1]}`;
    }
    return ipfsUrl;
}

//  --- B. ПОДКЛЮЧЕНИЕ ---

async function connectWallet() {
    if (!window.ethereum) {
        alert("MetaMask is not installed. Please install it to continue.");
        return;
    }

    try {
        statusMsg.textContent = "Connecting...";
        
        provider = new ethers.providers.Web3Provider(window.ethereum);
        
        // Запрос на подключение аккаунта
        await provider.send("eth_requestAccounts", []);
        
        signer = provider.getSigner();
        currentAccount = await signer.getAddress();

        walletAddressDisplay.textContent = `Connected: ${currentAccount.slice(0, 6)}...${currentAccount.slice(-4)}`;
        connectBtn.style.display = 'none';

        // Инициализация контракта (signer нужен для функций, требующих подписи, но мы используем его для view)
        nftContract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_ABI, provider);

        // Запуск загрузки NFT
        await loadAndDisplayNFTs(currentAccount);
        
    } catch (err) {
        console.error("Connection failed:", err);
        statusMsg.textContent = "Failed to connect wallet.";
        connectBtn.style.display = 'block';
    }
}

// // --- C. ЗАГРУЗКА NFT ---

// /**
//  * Получает все NFT, принадлежащие указанному адресу.
//  * @param {string} ownerAddress - Адрес владельца.
//  */
// async function fetchCertificates(ownerAddress) {
//     if (!nftContract) return [];

//     try {
//         statusMsg.textContent = "Fetching your certificates from the blockchain...";
        
//         // 1. Получение количества токенов
//         const balance = await nftContract.balanceOf(ownerAddress);
//         const numTokens = balance.toNumber();

//         const certificatesList = [];

//         // 2. Итерация по токенам владельца
//         for (let i = 0; i < numTokens; i++) {
//             const tokenId = await nftContract.tokenOfOwnerByIndex(ownerAddress, i);
//             const tokenIdString = tokenId.toString();
            
//             // 3. Получение структурированных данных (нашего 'certificates' маппинга)
//             const certData = await nftContract.certificates(tokenId);
            
//             // 4. Загрузка JSON-файла метаданных по IPFS URI
//             const metadataUrl = convertIpfsUrl(certData.certificateURI);
            
//             let metadata = {};
//             try {
//                 const response = await fetch(metadataUrl);
//                 metadata = await response.json();
//             } catch (e) {
//                 console.warn(`Failed to fetch metadata for token ${tokenIdString}:`, metadataUrl);
//             }
            
//             certificatesList.push({
//                 tokenId: tokenIdString,
//                 name: certData.name,
//                 program: certData.program,
//                 grade: Number(certData.grade), // Преобразование в число для фильтрации
//                 certificateURI: certData.certificateURI,
//                 imageUrl: convertIpfsUrl(metadata.image), 
//             });
//         }
        
//         statusMsg.textContent = `Successfully loaded ${numTokens} certificate(s).`;
//         return certificatesList;

//     } catch (err) {
//         console.error("Error fetching certificates:", err);
//         statusMsg.textContent = "Error loading data. Check contract address or network.";
//         return [];
//     }
// }


// --- C. ЗАГРУЗКА NFT (ИСПРАВЛЕННАЯ ВЕРСИЯ) ---

/**
 * Получает все NFT, принадлежащие указанному адресу, используя totalSupply и ownerOf.
 * @param {string} ownerAddress - Адрес владельца.
 */
async function fetchCertificates(ownerAddress) {
    if (!nftContract) return [];

    try {
        statusMsg.textContent = "Fetching your certificates from the blockchain (using ownerOf loop)...";
        
        // 1. Получение общего количества выпущенных токенов
        const total = await nftContract.totalSupply();
        const numTokens = total.toNumber(); // В вашем случае это должно быть 3

        const certificatesList = [];
        let ownedCount = 0;

        // 2. Итерация по всем возможным ID токенов (от 1 до totalSupply)
        for (let tokenId = 1; tokenId <= numTokens; tokenId++) {
            
            let owner;
            try {
                // Получаем владельца токена. ownerOf - это стандартная функция ERC721
                owner = await nftContract.ownerOf(tokenId);
            } catch (e) {
                // Это может произойти, если токен еще не заминтен, но наш цикл этого не предполагает.
                console.warn(`Token ID ${tokenId} likely does not exist or has complex error.`);
                continue;
            }
            
            // 3. Проверяем, принадлежит ли токен текущему пользователю
            if (owner.toLowerCase() === ownerAddress.toLowerCase()) {
                ownedCount++;

                // 4. Если токен принадлежит, получаем структурированные данные
                const certData = await nftContract.certificates(tokenId);
                const tokenIdString = tokenId.toString();
                
                // 5. Загрузка JSON-файла метаданных
                const metadataUrl = convertIpfsUrl(certData.certificateURI);
                
                let metadata = {};
                try {
                    const response = await fetch(metadataUrl);
                    metadata = await response.json();
                } catch (e) {
                    console.warn(`Failed to fetch metadata for token ${tokenIdString}:`, metadataUrl);
                }
                
                certificatesList.push({
                    tokenId: tokenIdString,
                    name: certData.name,
                    program: certData.program,
                    grade: Number(certData.grade), 
                    certificateURI: certData.certificateURI,
                    imageUrl: convertIpfsUrl(metadata.image), 
                });
            }
        }
        
        statusMsg.textContent = `Successfully loaded ${ownedCount} certificate(s).`;
        return certificatesList;

    } catch (err) {
        console.error("Error fetching certificates:", err);
        statusMsg.textContent = "Error loading data. Check contract address or network.";
        return [];
    }
}
// --- D. ФИЛЬТРАЦИЯ И ОТОБРАЖЕНИЕ ---

function applyFilters(certs) {
    const searchQuery = searchInput.value.toLowerCase();
    const programFilter = filterProgram.value;
    const minGrade = Number(minGradeInput.value);

    return certs.filter(cert => {
        // Фильтр 1: Поиск по имени и программе
        const searchMatch = cert.name.toLowerCase().includes(searchQuery) || 
                            cert.program.toLowerCase().includes(searchQuery);

        // Фильтр 2: Фильтр по выбранной программе
        // const programMatch = programFilter === "" || cert.program === programFilter;
        // app.js (внутри applyFilters)
        const programMatch = programFilter === "" || cert.program.toLowerCase() === programFilter.toLowerCase();

        // Фильтр 3: Минимальная оценка
        const gradeMatch = cert.grade >= minGrade;

        return searchMatch && programMatch && gradeMatch;
    });
}

function renderGallery(certificates) {
    galleryContainer.innerHTML = '';
    
    if (certificates.length === 0) {
        galleryContainer.innerHTML = '<p id="statusMsg">No certificates match your criteria.</p>';
        return;
    }

    certificates.forEach(cert => {
        const card = document.createElement('div');
        card.className = 'nft-card';
        card.innerHTML = `
            <img src="${cert.imageUrl}" alt="Certificate NFT">
            <div style="padding: 15px;">
                <h3>${cert.name}</h3>
                <p><strong>Program:</strong> ${cert.program}</p>
                <p style="font-weight: bold; color: #76ff03;">Grade: ${cert.grade}%</p>
                <p style="font-size: 0.8em; color: #aaa;">ID: ${cert.tokenId}</p>
            </div>
        `;
        galleryContainer.appendChild(card);
    });
}

async function loadAndDisplayNFTs(ownerAddress) {
    // Получение данных и сохранение в глобальный массив
    allCertificates = await fetchCertificates(ownerAddress);
    
    // Начальный рендеринг
    const filtered = applyFilters(allCertificates);
    renderGallery(filtered);
}


// --- E. ИНИЦИАЛИЗАЦИЯ И ОБРАБОТЧИКИ ---

function main() {
    // Подключение кошелька
    connectBtn.addEventListener('click', connectWallet);

    // Упрощенный обработчик фильтров
    const filterHandler = () => {
        if (allCertificates.length > 0) {
            console.log("Applying filters..."); // Проверьте, появляется ли это в консоли
            const filtered = applyFilters(allCertificates);
            renderGallery(filtered);
        } else {
            console.log("Certificates not loaded yet.");
        }
    };

    // Привязываем обработчики к событиям
    searchInput.addEventListener('input', filterHandler);
    filterProgram.addEventListener('change', filterHandler);
    minGradeInput.addEventListener('input', filterHandler);
    // Добавим обработчик на потерю фокуса, если 'input' глючит
    minGradeInput.addEventListener('blur', filterHandler); 
}

main(); // Не забудьте вызвать!a