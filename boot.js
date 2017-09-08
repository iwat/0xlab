var mining_threads = 1

function checkWork() {
  if (eth.pendingTransactions.length > 0) {
    if (eth.mining) return
    console.log("== Pending transactions! Mining...")
    miner.start(mining_threads)
  } else {
    miner.stop()
    console.log("== No transactions! Mining stopped.")
  }
}

eth.filter("latest", function(err, block) { checkWork() })
eth.filter("pending", function(err, block) { checkWork() })

checkWork()
personal.unlockAccount(eth.accounts[0], "1234", 86400)

var zrxExchangeAddress = "0x07d1a9016e7ab7f0f782776c76d60431a2902b24"
var zrxProxyAddress = "0x7334964d08eecd766f9182e5c60a1255c81acb13"

var zrxTokenAddress = "0x2e108d2e4a2186dd453a09de88d0de910b135916"
var wethTokenAddress = "0xdb862500dd4a562b70ac43c4ae28973951144cc3"
var omgTokenAddress = "0x09de03b3aa3f279de3cb7f6dd2f7988ff20a9319"

loadScript("boot.local.js")

loadScript("contracts/0xProxy.js")
loadScript("contracts/zrxToken.js")
loadScript("contracts/wethToken.js")
loadScript("contracts/omgToken.js")
loadScript("contracts/0xExchange.js")
