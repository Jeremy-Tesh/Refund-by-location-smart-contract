const { ethers} = require("hardhat")



async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying Contract...")
    const SimpleStorage =await SimpleStorageFactory.deploy()
    await SimpleStorage._deployed()
    console.log(`Delpoyed contract to: ${SimpleStorage.address}`)
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })