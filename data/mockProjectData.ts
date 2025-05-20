import { Project } from "@/types/types";

export const projectsData: Project[] = [
	{
		id: "654321",
		userId: "1",
		title: "E-commerce Platform",
		description:
			"A full-featured online store with product management, cart functionality, and payment processing.",
		image:
			"https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress",
		technologies: ["React", "Node.js", "MongoDB", "Stripe"],
		githubRepo: "https://github.com",
		liveSite: "#",
		publishedDate: "2025-03-05",
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
		userId: "1",
		title: "Content Management System",
		description:
			"Custom CMS for a publishing company with rich text editing, media management, and role-based access control.",
		image:
			"https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress",
		technologies: ["TypeScript", "Next.js", "PostgreSQL", "AWS S3"],
		githubRepo: "https://github.com",
		liveSite: "#",
		publishedDate: "2025-04-14",
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
		userId: "1",
		title: "Fleet Management Dashboard",
		description:
			"Real-time dashboard for monitoring vehicle fleets with location tracking, maintenance schedules, and analytics.",
		image:
			"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
		technologies: ["React", "Redux", "Socket.io", "Google Maps API"],
		githubRepo: "https://github.com",
		liveSite: "#",
		publishedDate: "2025-05-23",
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
];
