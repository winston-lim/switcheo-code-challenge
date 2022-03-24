# Problem 4

## Task

Implement a script to retrieve the specified holders of [$SWTH token](https://bscscan.com/token/0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c) on the [Binance Smart Chain](https://coinmarketcap.com/alexandria/article/what-is-binance-smart-chain) network.

BSC Block Explorer: [https://bscscan.com/](https://bscscan.com/)

$SWTH Token Contract: `0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c`

Addresses to look up:

```json
0x123d475e13aa54a43a7421d94caa4459da021c77
0x0020c5222a24e4a96b720c06b803fb8d34adc0af
0xfe808b079187cc460f47374580f5fb47c82b87a5
```

## Installation

Install modules with yarn

```bash
  cd problem4
  yarn
```

Install modules with npm

```bash
  cd problem4
  npm install
```

## Running Tests

Test script with ts-node

```bash
  ts-node ./retrieve-holders.ts
```

## Overview of solution

- Spent hours reading documentations and experimenting of ethers and web3
- Upon further reading realised using an API would be okay for this problem i.e. I do not have to implement the API myself
- Read up and used BSBscan API

## Diffulties/ Lessons Learned

- Learnt various blockchain terminologies
- Learnt to understand requirements of the problem
- Learnt absout different blockchain APIs

## Packages

- node-fetch
- ts-node
