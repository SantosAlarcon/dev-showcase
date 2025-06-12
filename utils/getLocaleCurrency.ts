export const getLocaleCurrency = (locale: string, value: string) => {
	let currency: string = "";

	switch (locale) {
		case "es-ES":
			currency = "EUR";
			break;
		case "es-MX":
			currency = "MXN";
			break;
		case "es-AR":
			currency = "ARS";
			break;
		case "en-US":
			currency = "USD";
			break;
		case "en-ID":
			currency = "IDR";
			break;
		case "ja-JP":
			currency = "JPY";
			break;
		case "ko-KR":
			currency = "KRW";
			break;
		case "zh-CN":
			currency = "CNY";
			break;
		default:
			currency = "EUR";
			break;
	}

	const localeCurrency = parseInt(value).toLocaleString(locale, {
		style: 'currency',
		currency: currency,
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	});
	return localeCurrency;
};
