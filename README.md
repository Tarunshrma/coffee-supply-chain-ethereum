# Supply Chain Solution | Blockchain 

## Table of Contents
1. [General Info](#general-info)
2. [External Liberary](#external-liberary)
3. [Design Diagrams](#design-diagrams)
4. [Unit Tests](#unit-test)
5. [Deplyment Info](#deplyment-info)
6. [Installation](#installation)
7. [Front End](#FrontEnd)
8. [Setup Quorum] (#Quorum Setup)

### general-info
This is simplified version of coffee beans supply chain solution using Blockchain technologies. This project is part of [Udacity Nanodegree program](https://www.udacity.com/course/blockchain-developer-nanodegree--nd1309?coupon=SAVE75&utm_source=gsem_brand&utm_medium=ads_r&utm_campaign=1971936383_c&utm_term=71052942455_in&utm_keyword=udacity%20nanodegree%20blockchain_e&gclid=EAIaIQobChMI08-r8KfR8AIVGARgCh2wvw0oEAAYASAAEgKnTfD_BwE) 

### external-liberary
#### Roles
I have used the library called Roles which made it easier to manage AccessControl in my DAPP. It made it easy to add and remove roles in each of my AccessControl contracts (FarmerRole.sol, DistributorRole.sol, RetailerRole.sol, and ConsumerRole.sol).

#### truffle-contract
[Tuffle Contract](https://www.npmjs.com/package/@truffle/contract) is used to interect with deployed contract and call functions using java script. In this project I have embedded the truffle-contract as embedded script.

#### Web3 JS
[web3.js](https://web3js.readthedocs.io/) is a collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.

#### HDWalletProvider
[HDWalletProvider](https://www.npmjs.com/package/@truffle/hdwallet-provider) is configured in truffle.js and is used to connect to blockchain like Rinkeby or Mainnet.


### design-diagrams
#### Activity Diagram
![Design Diagram](/design-diagrams/activity-diagram.jpg)

#### Sequence Diagram
![Sequence Diagram](/design-diagrams/sequence-diagram.jpg)

#### Class Diagram
![Class Diagram](/design-diagrams/class-diagram.jpg)

#### State Diagram
![State Diagram](/design-diagrams/state-diagram.jpg)

### deplyment-info
#### [Rinkby/EtherScan Details](https://rinkeby.etherscan.io/address/0xc0f140f7ec513904be91bac0734a8c28c5d20103)
Deployed Contract Address: 0xc0f140f7ec513904be91bac0734a8c28c5d20103
Supply Chain Transaction Hash: 0x2d71e2a16a7bb6cc6f57c6631b28c03d9ae51211d27a60f66fa581048cd4eaa6 
![Deployment Info](/assests/rinkby-deployment.png)

### installation
A step by step series of examples that tell you have to get a development env running

Clone this repository:

```bash
git clone https://github.com/Tarunshrma/coffee-supply-chain-ethereum.git
```

Change directory to coffee-supply-chain-ethereum folder and install all requisite npm packages (as listed in package.json):

```bash
cd coffee-supply-chain-ethereum
npm install
```

Compile the smart contracts
```bash
truffle compile
```

Launch the local instance of blockchain to test your smart contracts. 
```bash
truffle develop
```
This command will launch the local blockchain at http://127.0.0.1:9545/ with test accounts and private keys. You can use those accounts to test and execute the smart contracts locally without deploying it to TestNet or MainNet. 
![Truffle Develop Info](/assests/truffle-develop-command.png)

Run Test Cases
```bash
truffle test
```
![Unit Test Case](/assests/test-case-suite.png)

Run front end
```bash
npm run dev
```
![Unit Test Case](/assests/run-frontend.png)

### FrontEnd
![Front End](/assests/front-end.png)

### Quorum Setup
The easiest way to get a network up and running is by using the [GoQuorum Wizard](https://docs.goquorum.consensys.net/en/stable/HowTo/GetStarted/Wizard/GettingStarted/). This command-line tool creates a local GoQuorum network that can be started and be ready for use in minutes.

Installing Quorum : 3 Node setup (QuickStart)
```bash
npm install -g quorum-wizard
quorum-wizard
```
![Quorum Setup](/assests/quorum/quorum-setup-3node.png)

Start Quorum network
```bash
cd <directory where quorum-wizard ran>/network/3-node-quickstart
./start.sh
quorum-wizard
```
![Quorum Setup](/assests/quorum/start-quorum-network.png)

Now your 3-node Quorum network is up and running and you can view it using cupcake dashboard using http://localhost/8999
![Quorum Setup](/assests/quorum/qourum-console.png)

Make change in truffle.config to point to Quorum nodes and deploy smart contract on nodeone
```bash
truffle migrate --network nodeone
```
![Quorum Setup](/assests/quorum/node1-deployment.png)