export const calculateDatePeriod = (dateStart: Date, dateEnd: Date) => {
	const years = dateEnd.getFullYear() - dateStart.getFullYear();
	const months = dateEnd.getMonth() - dateStart.getMonth();
	const days = dateEnd.getDay() - dateStart.getDay();
	return { years, months, days };
};
