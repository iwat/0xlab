loadScript("contracts/zrxTokenABI.js")

var zrxTokenContract = web3.eth.contract(zrxTokenABI)

if (zrxTokenAddress == "") {
  loadScript("contracts/zrxTokenCode.js")

  var zrxToken = zrxTokenContract.new(
    {
      from: web3.eth.accounts[0],
      data: zrxTokenCode,
      gas: 4000000
    },
    function(e, contract) {
    if (!e) {
      if (!contract.address) {
        console.log("zrxToken transaction: " + contract.transactionHash)
      } else {
        console.log("zrxToken contract: " + contract.address)
        console.log(contract)
      }
    }
  })
} else {
  var zrxToken = zrxTokenContract.at(zrxTokenAddress)
}
