// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    address public owner;
    constructor(string memory name, string memory symbol) ERC20(name, symbol) public {
        owner = msg.sender;
    }

    function updateOwner(address _owner) external{
        require(msg.sender == owner, 'only owner update the admin');
        owner = _owner;
    }
    function mint(address to, uint amount) external {
        require(msg.sender == owner, 'only owner can mint tokens');
        _mint(to, amount);
    }

    function burn(address account, uint amount) external {
        require(msg.sender == owner, 'only owner can burn tokens');
        _burn(account, amount);
    }

}