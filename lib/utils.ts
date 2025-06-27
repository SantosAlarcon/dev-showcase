
import { Experience, Period } from "@/types/types";

export const calculateDatePeriod = (dateStart: Date, dateEnd: Date) => {
	const years = dateEnd.getFullYear() - dateStart.getFullYear();
	const months = dateEnd.getMonth() - dateStart.getMonth();
	const days = dateEnd.getDay() - dateStart.getDay();
	return { years, months, days };
};

export const calculateTotalExperience = (workExperience: Experience[]) => {
    return workExperience.reduce(
        (total, experience: Experience) => {
            const years =
                (experience.endDate === "Present"
                    ? new Date().getFullYear()
                    : new Date(experience.endDate).getFullYear()) -
                new Date(experience.startDate).getFullYear();

            const months =
                (experience.endDate === "Present"
                    ? new Date().getMonth()
                    : new Date(experience.endDate).getMonth()) -
                new Date(experience.startDate).getMonth();
            const days =
                (experience.endDate === "Present"
                    ? new Date().getDay()
                    : new Date(experience.endDate).getDay()) -
                new Date(experience.startDate).getDay();

            return {
                years: total.years + years,
                months: total.months + months,
                days: total.days + days,
            };
        },
        { years: 0, months: 0, days: 0 },
    );
};

export const calculateTotalPeriods = (periods: Period[]) => {
	return periods.reduce((total, period: Period) => {
		return {
			years: total.years + period.years,
			months: total.months + period.months,
			days: total.days + period.days,
		};
	});
};

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
