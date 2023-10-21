const getPrice = async () => {
	const response = await fetch(
		'https://public-api.birdeye.so/public/price?address=So11111111111111111111111111111111111111112'
	);
	const data = await response.json();
	const price = data.data.value;
	return price.toFixed(2);
};

export { getPrice };
