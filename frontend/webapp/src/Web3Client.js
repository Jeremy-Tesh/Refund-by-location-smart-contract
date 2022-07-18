import Web3 from "web3";
// import NFTContractBuild from '../../../backend/artifacts/contracts/Refund.sol/Refund.json'

let selectedAccount;

export const init = async () =>{
    let provider = window.ethereum;
    if(typeof provider !== 'undefined'){
      provider.request({method: 'eth_requestAccounts'}).then(accounts=>{
        selectedAccount=accounts[0]
        console.log(`selected account is ${selectedAccount}`);
      }).catch(err => {
        console.log(err)
      });
      window.ethereum.on('accountsChanged',function (accounts){
        selectedAccount=accounts[0]
        console.log(`selected account changed to ${selectedAccount}`);
      })
    }

    const web3 = new Web3(provider);
    const networkId = await web3.eth.net.getId();

    // const nftContract = new web3.eth.Contract(
    //   NFTContractBuild.abu,
    //   nftContract.networks[networkId].address
    // )
}