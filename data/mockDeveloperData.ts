import { type DeveloperInfo } from "@/types/types";

const developersData: DeveloperInfo[] = [
	{
		id: "1",
		name: "Alex",
		surname: "Johnson",
		title: "Full Stack Developer",
		country: "USA",
		state: "Texas",
		city: "San Francisco",
		memberSince: "3/5/2025",
		avatar:
			"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
		bannerImage:
			"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		skills: {
			frontend: ["React", "Next.js", "Redux", "TypeScript"],
			backend: ["Node.js", "Express.js", "MongoDB", "GraphQL"],
			other: ["AWS", "Jest"]
		},
		reviews: 28,
		followers: 100,
		isAvailable: true,
		bio: "Full stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud architecture. I'm passionate about creating clean, maintainable code and delivering exceptional user experiences.",
		email: "alexjohnson@gmail.com",
		freelancer: { hourlyRate: "85" },
		languages: ["English (Native)", "Spanish (Conversational)"],
		workExperience: [
			{
				title: "Senior Software Engineer",
				company: "TechCorp",
				location: "Remote",
				startDate: "Jan 2020",
				endDate: "Present",
				description:
					"Led development of customer-facing applications with React and Node.js. Implemented CI/CD pipelines and microservices architecture.",
			},
			{
				title: "Full Stack Developer",
				company: "InnovateSoft",
				location: "San Francisco, CA",
				startDate: "Mar 2018",
				endDate: "Dec 2019",
				description:
					"Developed and maintained web applications for enterprise clients. Collaborated with design team to implement responsive UIs.",
			},
		],
		social: {
			github: "https://github.com",
			linkedin: "https://linkedin.com",
			twitter: "https://twitter.com",
			portfolio: "https://alexjohnson.dev",
		},
	},
];

export default developersData;
