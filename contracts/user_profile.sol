// SPDX-License-Identifier: MIT
pragma solidity 0.8.26;

contract User {
    event Profile(string, uint256);
    string public name;
    uint256 public age;

    function profile(string memory _name, uint256 _age) public{
        name = _name;
        age = _age;
        emit Profile(name, age);
    }
}