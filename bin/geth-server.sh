#!/bin/sh
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

geth \
  --dev \
  --preload $DIR/../ethereum/boot.js \
  --etherbase 0x2f93db485bd163c6fc61ef748eea34c0e35f49c6 \
  --datadir $DIR/../ethereum/db \
  --jspath $DIR/../ethereum/ \
  --rpc \
  --networkid 1337 \
  console
