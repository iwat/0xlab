#!/bin/sh
~/Library/Application\ Support/Ethereum\ Wallet/binaries/Geth/unpacked/geth \
  --dev \
  --preload boot.js \
  --etherbase 0x2f93db485bd163c6fc61ef748eea34c0e35f49c6 \
  --datadir db \
  --rpc \
  console
