type DeveloperInfo = {
	id: string;
	name: string;
	surname: string;
	title: string;
	country: string;
	state: string;
	city: string;
	memberSince: string;
	avatar: string;
	bannerImage?: string;
	skills: SkillsInfo;
	reviews: number;
	followers: number;
	availability: AvailabilityTypes;
	bio: string;
	email: string;
	freelancer: FreelanceInfo | false;
	workExperience: Experience[];
	languages: string[];
	social: Social;
};

type FreelanceInfo = {
	hourlyRate: string;
};

type AvailabilityTypes = "Full-time" | "Contract" | "Freelance";

type SkillsInfo = {
	frontend: string[];
	backend: string[];
	other: string[];
};

type Experience = {
	title: string;
	company: string;
	location: string | "Remote";
	startDate: string;
	endDate: string | "Present";
	description: string;
};

type Project = {
	id: string;
	userId: string;
	title: string;
	description: string;
	image: string;
	technologies: string[];
	githubRepo?: string;
	liveSite?: string;
	story: string;
	publishedDate: string;
};

type Social = {
	github: string;
	linkedin?: string;
	facebook?: string;
	twitter?: string;
	portfolio?: string;
	threads?: string;
	bluesky?: string;
	instagram?: string;
	youtube?: string;
	medium?: string;
	devto?: string;
};

type ViewModeTypes = "grid" | "list";

type Testimonial = {
	id: number;
	content: string;
	author: {
		name: string;
		role: string;
		avatar: string;
	};
};

type ColorMode = "light" | "dark" | "system";

type Period = {
	years: number;
	months: number;
	days: number;
};

export { DeveloperInfo, FreelanceInfo, Experience, Project, Social, SkillsInfo, AvailabilityTypes, ViewModeTypes, Testimonial, ColorMode, Period };
