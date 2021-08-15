// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './Token.sol';

contract TokenEth is Token {
  constructor() Token('ETH Token', 'ETK') {}
}