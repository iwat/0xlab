var zrxExchangeABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "numerator",
        "type": "uint256"
      },
      {
        "name": "denominator",
        "type": "uint256"
      },
      {
        "name": "target",
        "type": "uint256"
      }
    ],
    "name": "isRoundingError",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "filled",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "cancelled",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderAddresses",
        "type": "address[5][]"
      },
      {
        "name": "orderValues",
        "type": "uint256[6][]"
      },
      {
        "name": "fillTakerTokenAmount",
        "type": "uint256"
      },
      {
        "name": "shouldThrowOnInsufficientBalanceOrAllowance",
        "type": "bool"
      },
      {
        "name": "v",
        "type": "uint8[]"
      },
      {
        "name": "r",
        "type": "bytes32[]"
      },
      {
        "name": "s",
        "type": "bytes32[]"
      }
    ],
    "name": "fillOrdersUpTo",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderAddresses",
        "type": "address[5]"
      },
      {
        "name": "orderValues",
        "type": "uint256[6]"
      },
      {
        "name": "cancelTakerTokenAmount",
        "type": "uint256"
      }
    ],
    "name": "cancelOrder",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "ZRX_TOKEN_CONTRACT",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderAddresses",
        "type": "address[5][]"
      },
      {
        "name": "orderValues",
        "type": "uint256[6][]"
      },
      {
        "name": "fillTakerTokenAmounts",
        "type": "uint256[]"
      },
      {
        "name": "v",
        "type": "uint8[]"
      },
      {
        "name": "r",
        "type": "bytes32[]"
      },
      {
        "name": "s",
        "type": "bytes32[]"
      }
    ],
    "name": "batchFillOrKillOrders",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderAddresses",
        "type": "address[5]"
      },
      {
        "name": "orderValues",
        "type": "uint256[6]"
      },
      {
        "name": "fillTakerTokenAmount",
        "type": "uint256"
      },
      {
        "name": "v",
        "type": "uint8"
      },
      {
        "name": "r",
        "type": "bytes32"
      },
      {
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "fillOrKillOrder",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "orderHash",
        "type": "bytes32"
      }
    ],
    "name": "getUnavailableTakerTokenAmount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "signer",
        "type": "address"
      },
      {
        "name": "hash",
        "type": "bytes32"
      },
      {
        "name": "v",
        "type": "uint8"
      },
      {
        "name": "r",
        "type": "bytes32"
      },
      {
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "isValidSignature",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "numerator",
        "type": "uint256"
      },
      {
        "name": "denominator",
        "type": "uint256"
      },
      {
        "name": "target",
        "type": "uint256"
      }
    ],
    "name": "getPartialAmount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "TOKEN_TRANSFER_PROXY_CONTRACT",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderAddresses",
        "type": "address[5][]"
      },
      {
        "name": "orderValues",
        "type": "uint256[6][]"
      },
      {
        "name": "fillTakerTokenAmounts",
        "type": "uint256[]"
      },
      {
        "name": "shouldThrowOnInsufficientBalanceOrAllowance",
        "type": "bool"
      },
      {
        "name": "v",
        "type": "uint8[]"
      },
      {
        "name": "r",
        "type": "bytes32[]"
      },
      {
        "name": "s",
        "type": "bytes32[]"
      }
    ],
    "name": "batchFillOrders",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderAddresses",
        "type": "address[5][]"
      },
      {
        "name": "orderValues",
        "type": "uint256[6][]"
      },
      {
        "name": "cancelTakerTokenAmounts",
        "type": "uint256[]"
      }
    ],
    "name": "batchCancelOrders",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "orderAddresses",
        "type": "address[5]"
      },
      {
        "name": "orderValues",
        "type": "uint256[6]"
      },
      {
        "name": "fillTakerTokenAmount",
        "type": "uint256"
      },
      {
        "name": "shouldThrowOnInsufficientBalanceOrAllowance",
        "type": "bool"
      },
      {
        "name": "v",
        "type": "uint8"
      },
      {
        "name": "r",
        "type": "bytes32"
      },
      {
        "name": "s",
        "type": "bytes32"
      }
    ],
    "name": "fillOrder",
    "outputs": [
      {
        "name": "filledTakerTokenAmount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "orderAddresses",
        "type": "address[5]"
      },
      {
        "name": "orderValues",
        "type": "uint256[6]"
      }
    ],
    "name": "getOrderHash",
    "outputs": [
      {
        "name": "",
        "type": "bytes32"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "EXTERNAL_QUERY_GAS_LIMIT",
    "outputs": [
      {
        "name": "",
        "type": "uint16"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "VERSION",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_zrxToken",
        "type": "address"
      },
      {
        "name": "_tokenTransferProxy",
        "type": "address"
      }
    ],
    "payable": false,
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "maker",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "taker",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "feeRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "makerToken",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "takerToken",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "filledMakerTokenAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "filledTakerTokenAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "paidMakerFee",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "paidTakerFee",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "tokens",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "orderHash",
        "type": "bytes32"
      }
    ],
    "name": "LogFill",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "maker",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "feeRecipient",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "makerToken",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "takerToken",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "cancelledMakerTokenAmount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "cancelledTakerTokenAmount",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "tokens",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "name": "orderHash",
        "type": "bytes32"
      }
    ],
    "name": "LogCancel",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "errorId",
        "type": "uint8"
      },
      {
        "indexed": true,
        "name": "orderHash",
        "type": "bytes32"
      }
    ],
    "name": "LogError",
    "type": "event"
  }
]