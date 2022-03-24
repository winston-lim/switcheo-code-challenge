# Problem 3

## Task

Implement a datasource connector to abstract away data retrieval and manipulation from the *View Controllers*. You are required to implement a Datasource utility class

Example:

```jsx
ds.getPrices()
	.then((prices) => {
		prices.forEach((price) => {
			console.log(
				`Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
			);
		});
	})
	.catch((error) => {
		console.err(error);
	});
```

**Data endpoint:** [https://static.ngnrs.io/test/prices](https://static.ngnrs.io/test/prices)

Notes:

    1. `Datasource.getPrices()` returns a Promise which provides fulfilment handler with an array of prices retrieved from a remote pricing engine.
    2. The remote price data can be retrieved from endpoint above.
    3. `price.mid()` returns the mid-point value between `price.buy` and `price.sell`.
    4. `price.quote()` returns the quote currency (counter currency) of the trade pair, e.g. for ETHSGD pair the quote currency is SGD.
    5. Hint: documenting you code will help users of the utility class understand how to use your code.

## Installation

Install modules with yarn

```bash
  cd problem3
  yarn
```

Install modules with npm

```bash
  cd problem3
  npm install
```

Test script with node

```bash
  node ./test.js
```

## Packages

- node-fetch
