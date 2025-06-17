import { Period } from "@/types/types";

export const calculateTotalPeriods = (periods: Period[]) => {
	return periods.reduce((total, period: Period) => {
		return {
			years: total.years + period.years,
			months: total.months + period.months,
			days: total.days + period.days,
		};
	});
};
