export const getCurrency = (locale: string) => {
	switch (locale) {
		case "en":
			return "$";
		case "es":
			return "€";
		case "in":
			return "₹";
		case "jp":
			return "¥";
		case "kr":
			return "₩";
		case "ru":
			return "₽";
		case "tr":
			return "₺";
		default:
			return "$";
	}
};
