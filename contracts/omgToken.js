loadScript("contracts/omgTokenABI.js")

var omgTokenContract = web3.eth.contract(omgTokenABI)

if (omgTokenAddress == "") {
  loadScript("contracts/omgTokenCode.js")

  var omgToken = omgTokenContract.new(
    {
      from: web3.eth.accounts[0],
      data: omgTokenCode,
      gas: 4000000
    },
    function(e, contract) {
    if (!e) {
      if (!contract.address) {
        console.log("omgToken transaction: " + contract.transactionHash)
      } else {
        console.log("omgToken contract: " + contract.address)
        console.log(contract)
      }
    }
  })
} else {
  var omgToken = omgTokenContract.at(omgTokenAddress)
}
