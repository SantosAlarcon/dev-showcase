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
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
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
                    "+ Led development of customer-facing applications with React and Node.js.\n+ Implemented CI/CD pipelines and microservices architecture.",
            },
            {
                title: "Full Stack Developer",
                company: "InnovateSoft",
                location: "San Francisco, CA",
                startDate: "Mar 2018",
                endDate: "Dec 2019",
                description:
                    "+ Developed and maintained web applications for enterprise clients.\n+ Collaborated with design team to implement responsive UIs.",
            },
        ],
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            portfolio: "https://alexjohnson.dev",
        },
    },
    {
        id: "2",
        name: "Samantha",
        surname: "Chen",
        title: "Frontend Developer",
        country: "USA",
        state: "Texas",
        city: "New York, NY",
        bio: "Frontend developer with 10+ years of experience building responsive and accessible web applications. I specialize in React, TypeScript, and design systems. I'm passionate about creating user-friendly interfaces and delivering exceptional user experiences.",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
        memberSince: "5/5/2025",
        bannerImage:
            "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        skills: {
            frontend: ["React", "Vue.js", "JavaScript", "CSS/SASS"],
            backend: [],
            other: [],
        },
        freelancer: false,
        workExperience: [
            {
                title: "Senior Frontend Developer",
                company: "InnovateTech Solutions",
                location: "San Francisco, CA",
                startDate: "2022-03-01",
                endDate: "Present",
                description:
                    "+ Led the development of scalable and responsive user interfaces for key web applications using React.js, Next.js, and TypeScript.\n+ Implemented component-based architectures and optimized rendering performance, resulting in a 20% improvement in page load times.\n+ Mentored junior developers and conducted code reviews to ensure high code quality and adherence to best practices.",
            },
            {
                title: "Frontend Developer",
                company: "WebSpark Digital",
                location: "Austin, TX",
                startDate: "2019-06-15",
                endDate: "2022-02-28",
                description:
                    "+ Developed and maintained interactive web applications using Angular and Vue.js.\n+ Collaborated closely with UX/UI designers to translate wireframes and mockups into functional user interfaces.\n+ Contributed to the design system and ensured cross-browser compatibility and accessibility standards.",
            },
        ],
        followers: 620,
        reviews: 16,
        isAvailable: true,
        email: "samanthachen@gmail.com",
        languages: ["English (Native)"],
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            portfolio: "https://samanthachen.dev",
        },
    },
    {
        id: "3",
        bio: "Mobile developer with 10+ years of experience building cross-platform mobile applications. I specialize in React Native, Kotlin, and Swift. I'm passionate about creating user-friendly interfaces and delivering exceptional user experiences.",
        name: "David",
        surname: "Martinez",
        title: "Mobile Developer",
        country: "USA",
        state: "Texas",
        city: "Austin, TX",
        memberSince: "3/6/2025",
        avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
        bannerImage:
            "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        languages: ["English (Native)"],
        skills: {
            frontend: ["React Native"],
            backend: [],
            other: ["Flutter", "Kotlin", "Swift"],
        },
        followers: 540,
        reviews: 20,
        isAvailable: false,
        workExperience: [
            {
                title: "Lead Mobile Developer",
                company: "AppGenius Labs",
                location: "New York, NY",
                startDate: "2023-01-01",
                endDate: "Present",
                description:
                    "+ Spearheaded the development and deployment of native iOS and Android applications using Swift, Kotlin, and React Native. \n+ Managed a team of 4 mobile developers, overseeing project timelines and ensuring high-quality code delivery.\n+ Implemented advanced features such as real-time data synchronization, offline capabilities, and push notifications.",
            },
            {
                title: "Mobile Developer",

                company: "MobileFirst Innovations",
                location: "Seattle, WA",
                startDate: "2020-09-01",
                endDate: "2022-12-31",
                description:
                    "+ Developed and maintained mobile applications for both iOS and Android platforms.\n+ Utilized Objective-C and Java for native development and gained experience with Flutter for cross-platform solutions.\n+ Integrated third-party APIs and ensured optimal performance and user experience.",
            },
        ],
        freelancer: false,
        email: "davidmartinez@gmail.com",
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            portfolio: "https://davidmartinez.dev",
        },
    },
    {
        id: "4",
        name: "Mira",
        surname: "Patel",
        bio: "Backend developer with 10+ years of experience building scalable web applications. I specialize in Python, Django, PostgreSQL, and AWS. I'm passionate about creating efficient and reliable backend systems.",
        title: "Backend Developer",
        country: "USA",
        state: "Washington",
        city: "Seattle, WA",
        email: "mirapatel@gmail.com",
        languages: ["English (Native)"],
        memberSince: "4/4/2025",
        avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
        bannerImage:
            "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        workExperience: [
            {
                title: "Staff Backend Engineer",
                company: "GlobalData Solutions",
                location: "London, UK",
                startDate: "2022-07-01",
                endDate: "Present",
                description:
                    "+ Designed and implemented robust and scalable backend services using Python (Django, Flask) and Go.\n+ Developed RESTful APIs and microservices architectures to support high-traffic web applications.\n+ Optimized database queries and managed PostgreSQL and MongoDB databases, resulting in significant performance improvements.\n+ Led the migration of legacy systems to modern cloud-based solutions (AWS).",
            },
            {
                title: "Backend Developer",
                company: "CodeCraft Technologies",
                location: "Bengaluru, India",
                startDate: "2019-01-10",
                endDate: "2022-06-30",
                description:
                    "+ Built and maintained backend services for various web applications using Node.js and Java (Spring Boot).\n+ Developed and consumed APIs, handled data persistence with MySQL, and implemented authentication and authorization mechanisms.\n+ Collaborated with frontend teams to define API specifications and troubleshoot integration issues.",
            },
        ],
        freelancer: false,
        skills: {
            frontend: [],
            backend: ["Python", "Django", "PostgreSQL", "AWS"],
            other: [],
        },
        followers: 250,
        reviews: 31,
        isAvailable: true,
        social: {
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            portfolio: "https://mirapatel.dev",
        },
    },
];

export default developersData;
