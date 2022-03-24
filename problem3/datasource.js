import fetch from "node-fetch";
// type Price = {
// 	buy: number,
// 	sell: number,
// 	id: number,
// 	pair: string,
// 	timeStamp: string,
// 	mid: () => number,
// 	quote: () => string,
// };

/**
 * @class Datasource
 * Utility class that abstracts away data retrieval from view controller
 */
class Datasource {
	/**
	 * Calls fetch(GET)from data source
	 * @return {Array<Price>} where Price is defined above
	 *
	 */
	getPrices = () => {
		return fetch("https://static.ngnrs.io/test/prices", {})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				const data = res.data.prices.map((price) => {
					return {
						...price,
						/**
						 * Gets the mid-point value between price.buy and price.sell
						 * @return {Number} The mid-point value
						 */
						mid: () => {
							return (price.buy + price.sell) / 2;
						},
						/**
						 * Gets the currency of the trade pair
						 * @returns {String} The currency
						 */
						quote: () => {
							return price.pair.slice(3);
						},
					};
				});
				return data;
			});
	};
}

export default Datasource;
