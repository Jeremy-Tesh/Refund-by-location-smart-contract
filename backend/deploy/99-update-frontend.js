const { ethers, network } = require("hardhat")
const fs = require("fs")

const FRONT_END_ADDRESSES_FILE = "../frontend/webapp/src/constants/contractAddresses.json"
const FRONT_END_ABI_FILE = "../frontend/webapp/src/constants/abi.json"

module.exports = async function () {
    if(process.env.UPDATE_FRONT_END){
        console.log("Updating front end...")
        updateContractAddress()
        updateAbi()
    }

}
async function updateAbi(){
    const refund = await ethers.getContract("Refund")
    fs.writeFileSync(FRONT_END_ABI_FILE,refund.interface.format(ethers.utils.FormatTypes.json))

}

async function updateContractAddress(){
    let contractAddresses=[];
    const refund = await ethers.getContract("Refund")
    const chainId = network.config.chainId.toString()
    console.log(refund.address[0])
    contractAddresses = JSON.parse(fs.readFileSync(FRONT_END_ADDRESSES_FILE,"utf8"))
    if(chainId in contractAddresses){
        if(!contractAddresses[chainId].includes(refund.address)){
            contractAddresses[chainId].push(refund.address)
        }
    }
    {
        contractAddresses[chainId] = [refund.address]
    }
    fs.writeFileSync(FRONT_END_ADDRESSES_FILE, JSON.stringify(contractAddresses))
}

module.exports.tags = ["all", "frontend"]