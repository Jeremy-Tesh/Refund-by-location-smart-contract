// const networkConfig = require("../helper-hardhat-config")
// const {network} =require("hardhat")




// module.exports = async({getNamedAccounts, deployments})=> {

//     const {deploy, log}= deployments
//     const {deployer} = await getNamedAccounts()
//     const chainId = network.config.chainId
//     // const ethUsdPriceFeedAddress =networkConfig[chainId]["ethUsdPriceFeed"]
//     const fundMe = await deploy("Refund", {
//         from:deployer,
//         args:[

//         ],
//         log:true,
//     })
    
// }
const { network } = require("hardhat");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  const refund = await deploy("Refund", {
    from: deployer,
    args: [],
    log: true,
  });
};