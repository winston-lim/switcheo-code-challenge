# Problem 5: Utility Contract

## Task

Deploy a utility EVM contract with a function to retrieve all token balances given a wallet address and the token contract addresses.

NOTE: Spent >12 hours and did not complete task, so I attached my last attempt in `APIConsumer.sol`

## Overview of solution(failed)

- Read documentations for truffle
- Read documentatioins of Solidity
- Struggled to understand requirements of the problem/come up with solution
- Eventually thought of using an API and found `api.ethplorer.io` which suits problem requirement
- Realized that using APIs in contracts are not easy but went down that rabbit hole
- Read documentations for Chainlink
- Attempted writing contact that makes multiple API calls to find balances for a wallet for each token address
- Deployed contract using Remix on Kovan Test Network
- Attempted creating a transaction - fails without much information on why
- Found out that the error was due to the created contract not having any LINK tokens
- Eventually was able to create transaction, but balances were not updated
- Debugged for another few hours - found out that API calls were not made/fulfilled, due to Oracle Node somehow accepting job
- Attempted to find Nodes that are active, but most still do not work
- Having no means to test/debug, I decided to submit it in its current state

## Diffulties/ Lessons Learned

- Learnt some solidity syntax
- Learnt various contract terminologies and requirements
- Learnt about contract compilation and deployment
- Learnt about testing networks
