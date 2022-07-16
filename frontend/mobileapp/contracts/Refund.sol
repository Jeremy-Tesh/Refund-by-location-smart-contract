// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Refund {
    uint256 public userCount;

    uint256 employer;

    struct Employee {
        string fullName;
        uint256 longtuide;
        uint256 latitude;
    }

    mapping(uint256 => Employee) public user;
    event UserCreated(string user, uint256 id);

    constructor() public {
        userCount = 1;
    }

    function addUser(
        string memory _fullName,
        uint256 _longtuide,
        uint256 _latitude
    ) public {
        user[userCount++] = Employee(_fullName, _longtuide, _latitude);
        emit UserCreated(_fullName, userCount + 1);
    }

    // function fund() public payable {

    //     s_addressToAmountFunded[msg.sender] += msg.value;
    //     s_funders.push(msg.sender);
    // }

    function compliance() public {}

    function getAmountEmployer(uint256 amount) private {}
}
