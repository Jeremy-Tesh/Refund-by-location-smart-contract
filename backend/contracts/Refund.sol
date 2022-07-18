// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract Refund {
    uint256 public userCount;
    address owner;
    uint256 employer;
struct Employee {
        string fullName;
        string email;
        uint256 longtuide;
        uint256 latitude;
        uint256 permittedRange;
    }

    mapping(address => Employee) public user;
    mapping(address => bool) public employeeCondition;
    event UserCreated(string user, uint256 id);
    address[] public employees;
constructor()  {
       
        owner = msg.sender;
    }

function getOwner() public view returns (address) {
        return owner;
    }

function createEmployee(address empAddress, string memory name, uint256 lat, uint256 lon, uint256 range) public {
        
    require(msg.sender == owner);
        user[empAddress].fullName = name;
        user[empAddress].latitude = lat;
        user[empAddress].longtuide = lon;
        user[empAddress].permittedRange = range;
        employees.push(empAddress);
    }

function getEmployeeDetail(address empAddress) public view returns (string memory, uint256, uint256, uint256) {
        return (user[empAddress].fullName, user[empAddress].latitude, user[empAddress].longtuide, user[empAddress].permittedRange);
    }

function getEmployees() public view returns (address[] memory) {
        return employees;
    }

function getCoordinate(uint256 lat, uint256 lon, uint256 time) public  {
       require(time >= 0 && time <= 86400);
       uint256 distance = calculateDistance(lat, lon);
       if (distance > user[msg.sender].permittedRange) {
           employeeCondition[msg.sender] = false;
       } else {
           employeeCondition[msg.sender] = true;
       }

    }
function calculateDistance(uint256 lat2, uint256 lon2) public view returns (uint256 dist)
    {
        (,uint256 lat1, uint256 lon1,) = getEmployeeDetail(msg.sender);

        uint256 distance = uint256(sqrt((lat2 - lat1) ** 2 + (lon2 - lon1) ** 2));
        return uint256(distance);
        

    }


    // Find the square root of a number using the Babylonian method
    function sqrt(uint x) public pure returns (uint y) {
    uint z = (x + 1) / 2;
    y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
        return y;
    }

   
   
}
