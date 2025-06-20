import { Experience } from "@/types/types";

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
