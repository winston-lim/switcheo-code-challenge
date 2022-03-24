import fetch from "node-fetch";
import "dotenv/config";
(async () => {
	const contractAddress = "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C";
	const decimalPoint = 8;
	const addresses = [
		"0x123d475e13aa54a43a7421d94caa4459da021c77",
		"0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
		"0xfe808b079187cc460f47374580f5fb47c82b87a5",
	];
	addresses.forEach(async (address) => {
		const data = await fetch(
			`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${address}&tag=latest&apikey=${process.env.BSCSCAN_API_KEY}`
		).then((res) => res.json());
		const wholeNumber = data.result.slice(0, data.result.length - decimalPoint);
		const amount =
			wholeNumber == 0
				? "0" + "." + data.result.slice(data.result.length - decimalPoint)
				: wholeNumber +
				  "." +
				  data.result.slice(data.result.length - decimalPoint);
		console.log(address, amount);
	});
})();
