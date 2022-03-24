var sum_to_n_a = function (n) {
	return (n / 2) * (1 + n);
};

var sum_to_n_b = function (n) {
	let sum = 0;
	for (let i = 1; i <= n; ++i) {
		sum += i;
	}
	return sum;
};

var sum_to_n_c = function (n) {
	let sum = 0;
	while (n--) {
		sum += n + 1;
	}
	return sum;
};
