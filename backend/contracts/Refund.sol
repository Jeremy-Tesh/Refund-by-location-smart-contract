// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
contract Refund{

    uint employer;
    uint emplyoyee;
    struct location {
        uint longtuide;
        uint latitude
    };

    function fund() public payable {
        
        s_addressToAmountFunded[msg.sender] += msg.value;
        s_funders.push(msg.sender);
    }

    function compliance() public {

    }

    function getAmountEmployer(uint amount) private{

    }


}