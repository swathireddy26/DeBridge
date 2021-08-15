const { version } = require("os");
const path = require("path");
require('dotenv').config({path: './.env'});
const HDWalletProvider = require("@truffle/hdwallet-provider");
const MetaMaskAccountIndex = 0;


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    },
  rinkeby_infura: {
    provider: function() {
      return new HDWalletProvider(process.env.MNEMONIC, "https://rinkeby.infura.io/v3/5e0ec9d59f7b47f0a77d19f65a0e38b1", MetaMaskAccountIndex)
    },
    network_id: 4
  },
  binance_testnet: {
    provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "https://data-seed-prebsc-1-s1.binance.org:8545", MetaMaskAccountIndex)
    },
    network_id: 97
  }
},
  compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};
