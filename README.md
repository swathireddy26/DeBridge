# DeBridge
Bridge between Ethereum and Binance Smart Chain Networks

Created a bridge API which will be listening to the events from ethereum network.
Whenever there is an transfer event, we will burn the specified amount of tokens on the ethereum network using bridge API  and we will mint the same amount of tokens on the BSC network.

Note:
1. This is not a Decentralized Solution
2. Actual solution should make use of Oracles to transfer the data between the Networks
3. Whenever the send request is emitted from the blockchain, The ChainLink nodes should listen to the event on the bridge and they should validate the transaction,
then only the minting of tokens should happen.


