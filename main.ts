import {ZeroEx, Order} from '/usr/local/lib/node_modules/0x.js';

const order: Order = {
  exchangeContractAddress: "0x12459c951127e0c374ff9105dda097662a027093",

  maker: "0x19fc4424dcc6c5d9ee944ca90d829f338368355d",
  makerTokenAddress: "0xe41d2489571d322189246dafa5ebde1f4699f498",
  taker: "0x0000000000000000000000000000000000000000",
  takerTokenAddress: "0x2956356cd2a2bf3202f771f50d3d14a367b48070",
  feeRecipient: "0x0000000000000000000000000000000000000000",

  makerTokenAmount: "1000000000000000000000",
  makerFee: "0",
  takerTokenAmount: "2000000000000000000",
  takerFee: "0",

  salt: "62854230186196251528901002302202920029046089523178017100847031083488626882168",
  expirationUnixTimestampSec: "2524582800",
};

const hash = ZeroEx.getOrderHashHex(order);
console.log(hash);
