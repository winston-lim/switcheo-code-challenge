# Problem 2

## Task

Create a transaction form based on the template provided in this folder.

## Installation

Install modules with yarn

```bash
  cd problem2
  yarn
```

Run with yarn

```bash
  yarn start
```

Install modules with npm

```bash
  cd problem2
  npm install
```

Run with npm

```bash
  npm start
```

## Features

- Input validation using Formik
  - input-address: uses web3-utils to validate ETH address
  - intput-amount: does not allow negative values
  - otp: does not allow numbers that are not 6 digits long
- Confirmation Modal before submission

## Diffulties/ Lessons Learned

- create-react-app >v5 does not work with web3 out of the box
  - Cause and solution mentioned here: https://github.com/ChainSafe/web3.js#troubleshooting-and-known-issues
- learnt a bit on how ETH addresses can be validated
  - https://ethereum.stackexchange.com/a/1379

## Packages

- create-react-app with typescript
- chakra-ui
- formik
