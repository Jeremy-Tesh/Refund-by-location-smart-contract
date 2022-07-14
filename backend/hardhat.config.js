require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")
require("hardhat-gas-reporter")
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */


const RINKEBY_RPC_URL =  process.env.RINKEBY_RPC_URL || ""
const PRIVATE_KEY =  process.env.PRIVATE_KEY || ""
module.exports = {
    defaultNetwork: "hardhat",
    networks: {
      rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
            // blockConfirmations: 6,
        },
      localhost: {
          url: "http://127.0.0.1:8545/",
          chainId: 31337,
      },
    },
    solidity: "0.8.8",
    etherscan: {
      gasReporter:{
        enabled:true
      }
    },

    namedAccounts: {
      deployer:{
        default:0,
      },
      user:{
        default:1,
      }
    }


     
  }