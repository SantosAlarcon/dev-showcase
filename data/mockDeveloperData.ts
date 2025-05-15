import { type DeveloperInfo } from "@/types/types";

const developersData: DeveloperInfo = [
	{
		id: "1",
		name: "Alex",
		surname: "Johnson",
		title: "Full Stack Developer",
		country: "USA",
		state: "Texas",
		memberSince: "3/5/2025",
		city: "San Francisco",
		avatar:
			"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
		bannerImage:
			"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		skills: {
			frontend: ["React", "Next.js", "Redux", "TypeScript"],
			backend: ["Node.js", "Express.js", "MongoDB", "GraphQL"],
			other: ["AWS", "Jest"],
		},
		reviews: 28,
		followers: 100,
		isAvailable: true,
		bio: "Full stack developer with 5+ years of experience building scalable web applications. I specialize in React, Node.js, and cloud architecture. I'm passionate about creating clean, maintainable code and delivering exceptional user experiences.",
		email: "alexjohnson@gmail.com",
		freelancer: { hourlyRate: "85", isFreelancer: true },
		languages: ["English (Native)", "Spanish (Conversational)"],
		workExperience: [
			{
				title: "Senior Software Engineer",
				company: "TechCorp",
				startDate: "Jan 2020",
				endDate: "Present",
				description:
					"Led development of customer-facing applications with React and Node.js. Implemented CI/CD pipelines and microservices architecture.",
			},
			{
				title: "Full Stack Developer",
				company: "InnovateSoft",
				startDate: "Mar 2018",
				endDate: "Dec 2019",
				description:
					"Developed and maintained web applications for enterprise clients. Collaborated with design team to implement responsive UIs.",
			},
		],
		projects: [
			{
				id: "654321",
				title: "E-commerce Platform",
				description:
					"A full-featured online store with product management, cart functionality, and payment processing.",
				image:
					"https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
				technologies: ["React", "Node.js", "MongoDB", "Stripe"],
				githubRepo: "https://github.com",
				liveSite: "#",
				story: `
				# E-commerce Platform

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultrices ultricies, nunc nisi aliquet nisi, eu tincidunt nisl nisi eu nisl. Nullam euismod, nisl eget ultrices ultricies, nunc nisi aliquet nisi, eu tincidunt nisl nisi eu nisl. Nullam euismod, nisl eget ultrices ultricies, nunc nisi aliquet nisi, eu tincidunt nisl nisi eu nisl. 

				## Features

				- Product management
				- Cart functionality
				- Payment processing

				## Technologies

				- React
				- Node.js
				- MongoDB
				- Stripe
`,
			},
			{
				id: "123456",
				title: "Content Management System",
				description:
					"Custom CMS for a publishing company with rich text editing, media management, and role-based access control.",
				image:
					"https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
				technologies: ["TypeScript", "Next.js", "PostgreSQL", "AWS S3"],
				githubRepo: "https://github.com",
				liveSite: "#",
				story: `
				# Content Management System

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultrices ultricies, nunc nisi aliquet nisi, eu tincidunt nisl nisi eu nisl. Nullam euismod, nisl eget ultrices ultricies, nunc nisi aliquet nisi, eu tincidunt nisl nisi eu nisl. Nullam euismod, nisl eget ultrices ultricies, nunc nisi aliquet nisi, eu tincidunt nisl nisi eu nisl. 

				## Features

				- Rich text editing
				- Media management
				- Role-based access control

				## Technologies

				- TypeScript
				- Next.js
				- PostgreSQL
				- AWS S3
`,
			},
			{
				id: "789123",
				title: "Fleet Management Dashboard",
				description:
					"Real-time dashboard for monitoring vehicle fleets with location tracking, maintenance schedules, and analytics.",
				image:
					"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
				technologies: ["React", "Redux", "Socket.io", "Google Maps API"],
				githubRepo: "https://github.com",
				liveSite: "#",
				story: `
				# Fleet Management Dashboard

				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl eget ultrices ultricies, nunc nisi aliquet nisi, eu tincidunt nisl nisi eu nisl. Nullam euismod, nisl eget ultrices ultricies, nunc nisi aliquet nisi, eu tincidunt nisl nisi eu nisl. Nullam euismod, nisl eget ultrices ultricies, nunc nisi aliquet nisi, eu tincidunt nisl nisi eu nisl. 

				## Features

				- Real-time dashboard
				- Location tracking
				- Maintenance schedules
				- Analytics

				## Technologies

				- React
				- Redux
				- Socket.io
				- Google Maps API
`,
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
