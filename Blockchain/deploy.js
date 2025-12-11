const { ethers } = require("ethers");

const fs = require("fs");

require("dotenv").config();


async function main() {

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);


const account = new ethers.Wallet(process.env.PRIVATE_KEY, provider);


const abi = fs.readFileSync("./note_sol_Note.abi", "utf8");

const bytecode = fs.readFileSync("./note_sol_Note.bin", "utf8");


const contractFactory = new ethers.ContractFactory(abi, bytecode, account);

console.log("Deploying contract...");

const contract = await contractFactory.deploy();

console.log("Contract deployed at address:", contract.address);

const deploymentReceipt = await contract.deployTransaction.wait(1);


let curNote = await contract.getNote();

console.log(`Current Note: ${curNote}`);

const txResponse = await contract.setNote("My first note1");

const txReceipt = await txResponse.wait(1);

curNote = await contract.getNote();

console.log(`New Note: ${curNote}`);

}


main()

.then(() => process.exit(0)).catch((error) => {

console.error(error);

process.exit(1);

});