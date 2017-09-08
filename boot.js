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

var zrx_token_contract = "0x2e108d2e4a2186dd453a09de88d0de910b135916"
var zrx_proxy_contract = "0x7334964d08eecd766f9182e5c60a1255c81acb13"
var weth_token_contract = "0xdb862500dd4a562b70ac43c4ae28973951144cc3"
var zrx_exchange_contract = "0x07d1a9016e7ab7f0f782776c76d60431a2902b24"
var omg_token_contract = "0x09de03b3aa3f279de3cb7f6dd2f7988ff20a9319"

loadScript("contracts/0x_exchange_abi.js")
loadScript("contracts/0x_token_abi.js")
loadScript("contracts/0x_weth_abi.js")
loadScript("contracts/omg_token_abi.js")

var zrxExchange = eth.contract(zrx_exchange_abi).at(zrx_exchange_contract);
var zrxToken = eth.contract(zrx_token_abi).at(zrx_token_contract);
var wethToken = eth.contract(weth_token_abi).at(weth_token_contract);
var omgToken = eth.contract(omg_token_abi).at(omg_token_contract);

personal.unlockAccount(eth.accounts[0], "1234")
