var zrx_proxy_code = "0x60606040525b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b610bd6806100576000396000f3006060604052361561008c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806315dacbea1461008e57806342f1181e14610123578063494503d41461015957806370712939146101b95780638da5cb5b146101ef578063b918161114610241578063d39de6e91461028f578063f2fde38b14610304575bfe5b341561009657fe5b610109600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061033a565b604051808215151515815260200191505060405180910390f35b341561012b57fe5b610157600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610495565b005b341561016157fe5b610177600480803590602001909190505061066d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101c157fe5b6101ed600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506106ad565b005b34156101f757fe5b6101ff610964565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561024957fe5b610275600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061098a565b604051808215151515815260200191505060405180910390f35b341561029757fe5b61029f6109aa565b60405180806020018281038252838181518152602001915080519060200190602002808383600083146102f1575b8051825260208311156102f1576020820191506020810190506020830392506102cd565b5050509050019250505060405180910390f35b341561030c57fe5b610338600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a3f565b005b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156103955760006000fd5b8473ffffffffffffffffffffffffffffffffffffffff166323b872dd8585856000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050602060405180830381600087803b151561047157fe5b6102c65a03f1151561047f57fe5b5050506040518051905090505b5b949350505050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104f25760006000fd5b80600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151561054d5760006000fd5b6001600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600280548060010182816105b99190610b19565b916000526020600020900160005b84909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550503373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f94bb87f4c15c4587ff559a7584006fa01ddf9299359be6b512b94527aa961aca60405180905060405180910390a35b5b505b50565b60028181548110151561067c57fe5b906000526020600020900160005b915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561070c5760006000fd5b81600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156107665760006000fd5b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055600091505b6002805490508210156108ff578273ffffffffffffffffffffffffffffffffffffffff166002838154811015156107ed57fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156108f157600260016002805490500381548110151561084d57fe5b906000526020600020900160005b9054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660028381548110151561088957fe5b906000526020600020900160005b6101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016002818180549050039150816108eb9190610b45565b506108ff565b5b81806001019250506107ba565b3373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167ff5b347a1e40749dd050f5f07fbdbeb7e3efa9756903044dd29401fd1d4bb4a1c60405180905060405180910390a35b5b505b5050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016020528060005260406000206000915054906101000a900460ff1681565b6109b2610b71565b6002805480602002602001604051908101604052809291908181526020018280548015610a3457602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116109ea575b505050505090505b90565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a9c5760006000fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515610b145780600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b5b50565b815481835581811511610b4057818360005260206000209182019101610b3f9190610b85565b5b505050565b815481835581811511610b6c57818360005260206000209182019101610b6b9190610b85565b5b505050565b602060405190810160405280600081525090565b610ba791905b80821115610ba3576000816000905550600101610b8b565b5090565b905600a165627a7a72305820b441558beff1ed20dc676d9167f3f7c910f731b2a1909a6147af9934964164020029"

loadScript("0x_proxy_abi.js")

var proxyContract = web3.eth.contract(zrx_proxy_abi)

var proxy = proxyContract.new({from:web3.eth.accounts[0], data: zrx_proxy_code, gas: 1000000}, function(e, contract){
  if (!e) {
    if (!contract.address) {
      console.log("Contract transaction send: TransactionHash: " + contract.transactionHash + " waiting to be mined...")
    } else {
      console.log("Contract mined! Address: " + contract.address)
      console.log(contract)
    }
  }
})
