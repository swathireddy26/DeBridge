const Web3 = require('web3');
const BridgeEth = require('../contracts/BridgeEth.json');
const BridgeBsc = require('../contracts/BridgeBsc.json');

const web3Eth = new Web3('https://rinkeby.infura.io/v3/5e0ec9d59f7b47f0a77d19f65a0e38b1');
const web3Bsc = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
const accounts = web3Eth.eth.getAccounts();

const bridgeEth = new web3Eth.eth.Contract(
  BridgeEth.abi,
  BridgeEth.networks['4'].address
);

const bridgeBsc = new web3Bsc.eth.Contract(
  BridgeBsc.abi,
  BridgeBsc.networks['97'].address
);

bridgeEth.events.Transfer(
  {fromBlock: 0, step: 0}
)
.on('data', async event => {
  const { from, to, amount, date, nonce } = event.returnValues;

  const tx = bridgeBsc.methods.mint(to, amount, nonce);
  const [gasPrice, gasCost] = await Promise.all([
    web3Bsc.eth.getGasPrice(),
    tx.estimateGas({from: accounts[0]}),
  ]);
  const data = tx.encodeABI();
  const txData = {
    from: accounts[0],
    to: bridgeBsc.options.address,
    data,
    gas: gasCost,
    gasPrice
  };
  const receipt = await web3Bsc.eth.sendTransaction(txData);
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  console.log(`
    Processed transfer:
    - from ${from} 
    - to ${to} 
    - amount ${amount} tokens
    - date ${date}
  `);
});