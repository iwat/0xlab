loadScript("contracts/0xProxyABI.js")

var zrxProxyContract = web3.eth.contract(zrxProxyABI)

if (zrxProxyAddress == "") {
  loadScript("contracts/0xProxyCode.js")

  var zrxProxy = zrxProxyContract.new(
    {
      from: web3.eth.accounts[0],
      data: zrxProxyCode,
      gas: 1000000
    },
    function(e, contract) {
    if (!e) {
      if (!contract.address) {
        console.log("0xProxy transaction: " + contract.transactionHash)
      } else {
        console.log("0xProxy contract: " + contract.address)
        console.log(contract)
      }
    }
  })
} else {
  var zrxProxy = zrxProxyContract.at(zrxProxyAddress)
}
