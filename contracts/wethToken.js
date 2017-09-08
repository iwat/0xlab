loadScript("contracts/wethTokenABI.js")

var wethTokenContract = web3.eth.contract(wethTokenABI)

if (wethTokenAddress == "") {
  loadScript("contracts/wethTokenCode.js")

  var wethToken = wethTokenContract.new(
    {
      from: web3.eth.accounts[0],
      data: wethTokenCode,
      gas: 4000000
    },
    function(e, contract) {
    if (!e) {
      if (!contract.address) {
        console.log("wethToken transaction: " + contract.transactionHash)
      } else {
        console.log("wethToken contract: " + contract.address)
        console.log(contract)
      }
    }
  })
} else {
  var wethToken = wethTokenContract.at(wethTokenAddress)
}
