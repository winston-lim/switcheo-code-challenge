import Datasource from "./datasource.js";

const ds = new Datasource();

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
