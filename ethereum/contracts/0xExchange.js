loadScript("contracts/0xExchangeABI.js")

var zrxExchangeContract = web3.eth.contract(zrxExchangeABI)

if (zrxExchangeAddress == "") {
  if (zrxProxy.address == "" || zrxToken.address == "") {
    console.log("zrxProxy.address and zrxToken.address is required to build 0xExchange")
  } else {
    loadScript("contracts/0xExchangeCode.js")

    var zrxExchange = zrxExchangeContract.new(
      zrxToken.address,
      zrxProxy.address,
      {
        from: web3.eth.accounts[0],
        data: zrxExchangeCode,
        gas: 4000000
      },
      function(e, contract) {
        if (!e) {
          if (!contract.address) {
            console.log("0xExchange transaction: " + contract.transactionHash)
          } else {
            console.log("0xExchange contract: " + contract.address)
            console.log(contract)
          }
        }
      })
  }
} else {
  var zrxExchange = zrxExchangeContract.at(zrxExchangeAddress)
}
