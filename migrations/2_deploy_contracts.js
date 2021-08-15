var TokenEth = artifacts.require('TokenEth.sol');
var TokenBsc = artifacts.require('TokenBsc.sol');
var BridgeEth = artifacts.require('BridgeEth.sol');
var BridgeBsc = artifacts.require('BridgeBsc.sol');
require('dotenv').config({path: '../.env'});

module.exports = async function (deployer, network, addresses) {
  if(network === 'rinkeby_infura') {
    await deployer.deploy(TokenEth);
    const tokenEth = await TokenEth.deployed();
    await tokenEth.mint(addresses[0],  process.env.INITIAL_TOKENS);
    await deployer.deploy(BridgeEth, tokenEth.address);
    const bridgeEth = await BridgeEth.deployed();
    await tokenEth.updateOwner(bridgeEth.address);
  }
  if(network === 'binance_testnet') {
    await deployer.deploy(TokenBsc);
    const tokenBsc = await TokenBsc.deployed();
    await deployer.deploy(BridgeBsc, tokenBsc.address);
    const bridgeBsc = await BridgeBsc.deployed();
    await tokenBsc.updateOwner(bridgeBsc.address);
  }
};