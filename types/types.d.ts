type DeveloperInfo = {
	id: string;
	name: string;
	surname: string;
	title: string;
	country: string;
	state: string;
	city: string;
	avatar: string;
	bannerImage?: string;
	skills: string[];
	reviews: number;
	followers: number;
	isAvailable: boolean;
	bio: string;
	email: string;
	freelancer: FreelanceInfo | false;
	workExperience: Experience[];
	languages: string[];
	projects: Project[];
	social: Social;
	memberSince: string;
}

type FreelanceInfo = {
	isFreelancer: true;
	hourlyRate: string;
}

type Experience = {
	title: string;
	company: string;
	startDate: string;
	endDate: string | "Present";
	description: string;
}

type Project = {
	title: string;
	description: string;
	image: string;
	technologies: string[];
	link: string;
}

type Social = {
	github: string;
	linkedin?: string;
	facebook?: string;
	twitter?: string;
	portfolio: string;
	threads?: string;
	bluesky?: string;
	instagram?: string;
	youtube?: string;
	medium?: string;
	devto?: string;
}

export { DeveloperInfo, FreelanceInfo, Experience, Project, Social };
