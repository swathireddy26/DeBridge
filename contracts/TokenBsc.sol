// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import './Token.sol';

contract TokenBsc is Token {
  constructor() Token('BSC Token', 'BTK') {}
}