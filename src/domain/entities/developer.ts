export type DeveloperInfo = {
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

export type FreelanceInfo = {
    hourlyRate: string;
};

export type AvailabilityTypes = "Full-time" | "Contract" | "Freelance";

export type SkillsInfo = {
    frontend: string[];
    backend: string[];
    other: string[];
};

export type Experience = {
    title: string;
    company: string;
    location: string | "Remote";
    startDate: string;
    endDate: string | "Present";
    description: string;
};

export type Social = {
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
