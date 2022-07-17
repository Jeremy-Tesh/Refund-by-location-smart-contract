let selectedAccount;

export const init = () =>{
    let provider = window.ethereum;
    if(typeof provider !== 'undefined'){
      provider.request({method: 'eth_requestAccounts'}).then(accounts=>{
        console.log(accounts);
      }).catch(err => {
        console.log(err)
      });
      window.ethereum.on('accountsChanged',function (accounts){
        console.log(accounts)
      })
    }

    const web3 = new Web3(provider);
}