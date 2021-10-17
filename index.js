//const Web3 = require("web3")

async function connectWeb3(){
    console.log("Hello web3.js")

    ethereum.request({ method: 'eth_requestAccounts' })

    web3 = new Web3(window.ethereum)

    console.log(web3.currentProvider.selectedAddress)
    document.getElementById("lblAddressWeb3").innerHTML = web3.currentProvider.selectedAddress

    let balance = await ethereum.request({ method: 'eth_getBalance', params:[web3.currentProvider.selectedAddress, "latest"]})

    document.getElementById("lblBalanceWeb3").innerHTML = parseInt(balance) / 10**18

}

function sendTransactionWeb3(){
    var transaction = {
        from: web3.currentProvider.selectedAddress,
        to: "0xE6dC7c6c793E449edFD6296D01e23AD3538942a5",
        value: web3.utils.toWei("0.01", "ether")
        }

    ethereum.request({ method: 'eth_sendTransaction', params: [transaction]})
}

async function getBalanceWeb3(){
    let balance = await ethereum.request({ method: 'eth_getBalance', params:[web3.currentProvider.selectedAddress, "latest"]})

    document.getElementById("lblBalanceWeb3").innerHTML = parseInt(balance) / 10**18

    return balance
}

function connectEthers(){
    console.log("Hello ethers.js")

    // A Web3Provider wraps a standard Web3 provider, which is
    // what Metamask injects as window.ethereum into each page
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    //const provider = new ethers.providers.Web3Provider(web3.currentProvider);

    // There is only ever up to one account in MetaMask exposed
    const signer = provider.getSigner();
}

function sendTransactionEthers(){
    var transaction = {
        to: "0x3227ac057F7CD3D8721eD0db0572aE8E3db7361B",
        value: ethers.utils.parseEther("1")
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const signer = provider.getSigner();

    signer.sendTransaction(transaction)
}

async function getBalanceEthers(){
    let balance = await ethereum.request({ method: 'eth_getBalance', params:[web3.currentProvider.selectedAddress, "latest"]})

    document.getElementById("lblBalanceEthers").innerHTML = parseInt(balance) / 10**18

    return balance
}