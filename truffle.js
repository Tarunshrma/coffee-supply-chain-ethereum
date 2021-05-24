//const HDWalletProvider = require('@truffle/hdwallet-provider');
//const infuraKey = "64cc5f0a9bf647339ba58bb90f3411bb";

//const fs = require('fs');
//const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    // rinkeby: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
    //   network_id: 4,       // rinkeby's id
    //   gas: 4500000,        // rinkeby has a lower block limit than mainnet
    //   gasPrice: 10000000000,
    // }, 
    nodeone: {
        host: "127.0.0.1",
        port: 22000,
        network_id: "*", // Match any network id,
        gasPrice: 0,
        gas : 4500000,
        type: "quorum"
      },
      nodetwo: {
        host: "127.0.0.1",
        port: 22001,
        network_id: "*", // Match any network id,
        gasPrice: 0,
        gas : 4500000
      },
      nodethree: {
        host: "127.0.0.1",
        port: 22002,
        network_id: "*", // Match any network id,
        gasPrice: 0,
        gas : 4500000
      },
      compilers: {
        solc: {
          version: "0.4.25",   
        }
      }
  }
};