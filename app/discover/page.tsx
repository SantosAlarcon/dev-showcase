"use client";

import { skillsList } from "@/data/skills";
import { useState } from "react";
import { motion } from "motion/react";
import {
	Box,
	Typography,
	Container,
	Grid,
	Card,
	Avatar,
	Chip,
	Stack,
	IconButton,
	AspectRatio,
	Button,
	CardOverflow,
	CardContent,
	Input,
	FormControl,
	FormLabel,
	Select,
	Option,
	Divider,
	Sheet,
	Tooltip,
} from "@mui/joy";
import {
	ChevronRight,
	Search,
	Filter,
	Heart,
	MessageCircle,
	ExternalLink,
	MapPin,
	Briefcase,
	Calendar,
	LayoutPanelLeft,
	LayoutGrid,
} from "lucide-react";
import Image from "next/image";

// Sample developer data
const allDevelopers = [
	{
		id: 1,
		name: "Alex Johnson",
		title: "Full Stack Developer",
		location: "San Francisco, CA",
		experience: "5 years",
		availability: "Full-time",
		avatar:
			"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
		coverImage:
			"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
		rating: 4.9,
		reviews: 28,
		isAvailable: true,
		bio: "Full stack developer with expertise in React and Node.js. I specialize in building scalable web applications with clean, maintainable code.",
	},
	{
		id: 2,
		name: "Samantha Chen",
		title: "Frontend Developer",
		location: "New York, NY",
		experience: "3 years",
		availability: "Contract",
		avatar:
			"https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
		coverImage:
			"https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		skills: ["React", "Vue.js", "JavaScript", "CSS/SASS", "Figma"],
		rating: 4.8,
		reviews: 16,
		isAvailable: true,
		bio: "Frontend developer focused on creating beautiful, responsive user interfaces. I love turning designs into pixel-perfect implementations.",
	},
	{
		id: 3,
		name: "David Martinez",
		title: "Mobile Developer",
		location: "Austin, TX",
		experience: "4 years",
		availability: "Freelance",
		avatar:
			"https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
		coverImage:
			"https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		skills: ["React Native", "Flutter", "Kotlin", "Swift", "Firebase"],
		rating: 4.7,
		reviews: 20,
		isAvailable: false,
		bio: "Experienced mobile developer specialized in cross-platform development. I build native-feeling apps for iOS and Android.",
	},
	{
		id: 4,
		name: "Mira Patel",
		title: "Backend Developer",
		location: "Seattle, WA",
		experience: "6 years",
		availability: "Full-time",
		avatar:
			"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
		coverImage:
			"https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		skills: ["Python", "Django", "PostgreSQL", "AWS", "Docker"],
		rating: 5.0,
		reviews: 31,
		isAvailable: true,
		bio: "Backend developer with extensive experience in Python and cloud architecture. I build robust, scalable systems that handle millions of requests.",
	},
	{
		id: 5,
		name: "James Wilson",
		title: "DevOps Engineer",
		location: "Chicago, IL",
		experience: "7 years",
		availability: "Full-time",
		avatar:
			"https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
		coverImage:
			"https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		skills: ["AWS", "Kubernetes", "Docker", "Terraform", "CI/CD"],
		rating: 4.8,
		reviews: 24,
		isAvailable: true,
		bio: "DevOps engineer focused on automating infrastructure and streamlining deployment pipelines. I help teams ship code faster and more reliably.",
	},
	{
		id: 6,
		name: "Elena Rodriguez",
		title: "UI/UX Developer",
		location: "Miami, FL",
		experience: "4 years",
		availability: "Contract",
		avatar:
			"https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
		coverImage:
			"https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		skills: ["React", "Figma", "UI Design", "CSS", "User Research"],
		rating: 4.9,
		reviews: 18,
		isAvailable: true,
		bio: "Frontend developer with a strong focus on UI/UX design. I create intuitive interfaces that users love to interact with.",
	},
	{
		id: 7,
		name: "Terrence Kim",
		title: "Data Engineer",
		location: "Boston, MA",
		experience: "5 years",
		availability: "Full-time",
		avatar:
			"https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=600",
		coverImage:
			"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		skills: ["Python", "Spark", "SQL", "Airflow", "Snowflake"],
		rating: 4.7,
		reviews: 15,
		isAvailable: false,
		bio: "Data engineer specializing in building data pipelines and ETL processes. I help companies make sense of their data.",
	},
	{
		id: 8,
		name: "Olivia Thomas",
		title: "Security Engineer",
		location: "Denver, CO",
		experience: "8 years",
		availability: "Contract",
		avatar:
			"https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600",
		coverImage:
			"https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		skills: [
			"Security",
			"Penetration Testing",
			"Python",
			"Network Security",
			"Compliance",
		],
		rating: 4.9,
		reviews: 22,
		isAvailable: true,
		bio: "Cybersecurity expert with a focus on application security. I help companies protect their systems and customer data from threats.",
	},
];

// Filters
const experienceLevels = ["Any", "1-2 years", "3-5 years", "5+ years"];
const availabilityTypes = ["Any", "Full-time", "Contract", "Freelance"];

export default function DiscoverPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedExperience, setSelectedExperience] = useState("Any");
	const [selectedAvailability, setSelectedAvailability] = useState("Any");
	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
	const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
	const [likedDevelopers, setLikedDevelopers] = useState<number[]>([]);
	const [filteredDevelopers, setFilteredDevelopers] = useState(allDevelopers);
	const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

	const toggleLike = (id: number) => {
		if (likedDevelopers.includes(id)) {
			setLikedDevelopers(likedDevelopers.filter((devId) => devId !== id));
		} else {
			setLikedDevelopers([...likedDevelopers, id]);
		}
	};

	const toggleSkill = (skill: string) => {
		if (selectedSkills.includes(skill)) {
			setSelectedSkills(selectedSkills.filter((s) => s !== skill));
		} else {
			setSelectedSkills([...selectedSkills, skill]);
		}
	};

	const applyFilters = () => {
		let results = allDevelopers;

		// Search filter
		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			results = results.filter(
				(dev) =>
					dev.name.toLowerCase().includes(query) ||
					dev.title.toLowerCase().includes(query) ||
					dev.bio.toLowerCase().includes(query) ||
					dev.skills.some((skill) => skill.toLowerCase().includes(query)),
			);
		}

		// Experience filter
		if (selectedExperience !== "Any") {
			if (selectedExperience === "1-2 years") {
				results = results.filter((dev) => parseInt(dev.experience) <= 2);
			} else if (selectedExperience === "3-5 years") {
				results = results.filter(
					(dev) =>
						parseInt(dev.experience) >= 3 && parseInt(dev.experience) <= 5,
				);
			} else if (selectedExperience === "5+ years") {
				results = results.filter((dev) => parseInt(dev.experience) >= 5);
			}
		}

		// Availability filter
		if (selectedAvailability !== "Any") {
			results = results.filter(
				(dev) => dev.availability === selectedAvailability,
			);
		}

		// Skills filter
		if (selectedSkills.length > 0) {
			results = results.filter((dev) =>
				selectedSkills.some((skill) => dev.skills.includes(skill)),
			);
		}

		setFilteredDevelopers(results);
		setMobileFilterOpen(false);
	};

	const resetFilters = () => {
		setSearchQuery("");
		setSelectedExperience("Any");
		setSelectedAvailability("Any");
		setSelectedSkills([]);
		setFilteredDevelopers(allDevelopers);
	};

	return (
		<Box
			sx={{
				py: { xs: 4, md: 8 },
				bgcolor: "background.body",
			}}
		>
			<Container maxWidth="lg">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Typography
						level="h1"
						sx={{
							mb: 1,
							fontWeight: 800,
							fontSize: { xs: "2rem", md: "2.5rem" },
						}}
					>
						Discover Developers
					</Typography>
					<Typography
						level="body-lg"
						sx={{
							mb: 4,
							color: "text.secondary",
							maxWidth: "800px",
						}}
					>
						Find the perfect developer for your project. Browse profiles, filter
						by skills, and connect with top talent.
					</Typography>
				</motion.div>

				<Grid container spacing={4}>
					{/* Filters - Desktop */}
					<Grid
						xs={12}
						md={3}
						sx={{
							display: { xs: "none", md: "block" },
						}}
					>
						<Card variant="outlined" sx={{ position: "sticky", top: "100px" }}>
							<Typography level="title-lg" sx={{ mb: 2 }}>
								Filters
							</Typography>

							<Divider sx={{ my: 2 }} />

							<FormControl sx={{ mb: 2 }}>
								<FormLabel>Search</FormLabel>
								<Input
									placeholder="Search developers..."
									startDecorator={<Search size={18} />}
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</FormControl>

							<FormControl sx={{ mb: 2 }}>
								<FormLabel>Experience</FormLabel>
								<Select
									value={selectedExperience}
									onChange={(_, value) =>
										setSelectedExperience(value as string)
									}
								>
									{experienceLevels.map((level) => (
										<Option key={level} value={level}>
											{level}
										</Option>
									))}
								</Select>
							</FormControl>

							<FormControl sx={{ mb: 2 }}>
								<FormLabel>Availability</FormLabel>
								<Select
									value={selectedAvailability}
									onChange={(_, value) =>
										setSelectedAvailability(value as string)
									}
								>
									{availabilityTypes.map((type) => (
										<Option key={type} value={type}>
											{type}
										</Option>
									))}
								</Select>
							</FormControl>

							<FormControl sx={{ mb: 2 }}>
								<FormLabel>Skills</FormLabel>
								<Box
									sx={{
										display: "flex",
										flexWrap: "wrap",
										gap: 1,
										mt: 1,
									}}
								>
									{skillsList.map((skill) => (
										<Chip
											key={skill}
											variant={
												selectedSkills.includes(skill) ? "solid" : "soft"
											}
											color={
												selectedSkills.includes(skill) ? "primary" : "neutral"
											}
											size="sm"
											onClick={() => toggleSkill(skill)}
											sx={{ cursor: "pointer" }}
										>
											{skill}
										</Chip>
									))}
								</Box>
							</FormControl>

							<Stack direction="row" spacing={1} sx={{ mt: 3 }}>
								<Button
									variant="solid"
									color="primary"
									onClick={applyFilters}
									fullWidth
								>
									Apply Filters
								</Button>
								<Button variant="plain" color="neutral" onClick={resetFilters}>
									Reset
								</Button>
							</Stack>
						</Card>
					</Grid>

					{/* Mobile Filter Button */}
					<Box
						sx={{
							display: { xs: "flex", md: "none" },
							width: "100%",
							mb: 2,
							justifyContent: "space-between",
						}}
					>
						<Button
							variant="outlined"
							color="neutral"
							startDecorator={<Filter size={16} />}
							onClick={() => setMobileFilterOpen(true)}
							sx={{ mb: 2 }}
						>
							Filters
						</Button>

						<Box sx={{ display: "flex", gap: 1 }}>
							<IconButton
								aria-label="Grid view"
								variant={viewMode === "grid" ? "solid" : "plain"}
								color={viewMode === "grid" ? "primary" : "neutral"}
								onClick={() => setViewMode("grid")}
							>
								<LayoutGrid size={20} />
							</IconButton>
							<IconButton
								aria-label="List view"
								variant={viewMode === "list" ? "solid" : "plain"}
								color={viewMode === "list" ? "primary" : "neutral"}
								onClick={() => setViewMode("list")}
							>
								<LayoutPanelLeft size={20} />
							</IconButton>
						</Box>
					</Box>

					{/* Mobile Filter Sheet */}
					{mobileFilterOpen && (
						<Sheet
							variant="outlined"
							sx={{
								display: { xs: "block", md: "none" },
								position: "fixed",
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								zIndex: 1000,
								p: 2,
								overflowY: "auto",
							}}
						>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									mb: 2,
								}}
							>
								<Typography level="title-lg">Filters</Typography>
								<IconButton
									variant="plain"
									color="neutral"
									onClick={() => setMobileFilterOpen(false)}
								>
									✕
								</IconButton>
							</Box>

							<Divider sx={{ my: 2 }} />

							<FormControl sx={{ mb: 2 }}>
								<FormLabel>Search</FormLabel>
								<Input
									placeholder="Search developers..."
									startDecorator={<Search size={18} />}
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
								/>
							</FormControl>

							<FormControl sx={{ mb: 2 }}>
								<FormLabel>Experience</FormLabel>
								<Select
									value={selectedExperience}
									onChange={(_, value) =>
										setSelectedExperience(value as string)
									}
								>
									{experienceLevels.map((level) => (
										<Option key={level} value={level}>
											{level}
										</Option>
									))}
								</Select>
							</FormControl>

							<FormControl sx={{ mb: 2 }}>
								<FormLabel>Availability</FormLabel>
								<Select
									value={selectedAvailability}
									onChange={(_, value) =>
										setSelectedAvailability(value as string)
									}
								>
									{availabilityTypes.map((type) => (
										<Option key={type} value={type}>
											{type}
										</Option>
									))}
								</Select>
							</FormControl>

							<FormControl sx={{ mb: 2 }}>
								<FormLabel>Skills</FormLabel>
								<Box
									sx={{
										display: "flex",
										flexWrap: "wrap",
										gap: 1,
										mt: 1,
									}}
								>
									{skillsList.map((skill) => (
										<Chip
											key={skill}
											variant={
												selectedSkills.includes(skill) ? "solid" : "soft"
											}
											color={
												selectedSkills.includes(skill) ? "primary" : "neutral"
											}
											size="sm"
											onClick={() => toggleSkill(skill)}
											sx={{ cursor: "pointer" }}
										>
											{skill}
										</Chip>
									))}
								</Box>
							</FormControl>

							<Stack direction="row" spacing={1} sx={{ mt: 3 }}>
								<Button
									variant="solid"
									color="primary"
									onClick={applyFilters}
									fullWidth
								>
									Apply Filters
								</Button>
								<Button variant="plain" color="neutral" onClick={resetFilters}>
									Reset
								</Button>
							</Stack>
						</Sheet>
					)}

					{/* Results */}
					<Grid xs={12} md={9}>
						{/* View Mode Toggle - Desktop */}
						<Box
							sx={{
								display: { xs: "none", md: "flex" },
								justifyContent: "space-between",
								alignItems: "center",
								mb: 3,
							}}
						>
							<Typography level="body-sm">
								Showing {filteredDevelopers.length} developers
							</Typography>
							<Box sx={{ display: "flex", gap: 1 }}>
								<IconButton
									aria-label="Grid view"
									variant={viewMode === "grid" ? "solid" : "plain"}
									color={viewMode === "grid" ? "primary" : "neutral"}
									onClick={() => setViewMode("grid")}
								>
									<Tooltip title="Grid view" variant="solid" arrow>
										<LayoutGrid size={20} />
									</Tooltip>
								</IconButton>
								<IconButton
									aria-label="List view"
									variant={viewMode === "list" ? "solid" : "plain"}
									color={viewMode === "list" ? "primary" : "neutral"}
									onClick={() => setViewMode("list")}
								>
									<Tooltip title="List view" variant="solid" arrow>
										<LayoutPanelLeft size={20} />
									</Tooltip>
								</IconButton>
							</Box>
						</Box>

						{/* Grid View */}
						{viewMode === "grid" && (
							<Grid container spacing={3}>
								{filteredDevelopers.map((developer, index) => (
									<Grid key={developer.id} xs={12} sm={6} md={4}>
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{
												duration: 0.3,
												delay: index * 0.05,
											}}
										>
											<Card
												variant="outlined"
												sx={{
													height: "100%",
													overflow: "hidden",
													transition: "all 0.3s ease",
													"&:hover": {
														boxShadow: "md",
														transform: "translateY(-5px)",
													},
												}}
											>
												<CardOverflow>
													<AspectRatio ratio="21/9">
														<Image
															src={developer.coverImage}
															alt={`${developer.name}'s cover`}
															width={ 1920 }
															height={ 1080 }
															loading="lazy"
															style={{
																objectFit: "cover",
															}}
														/>
													</AspectRatio>
													<Box
														sx={{
															position: "absolute",
															top: 12,
															right: 12,
															display: "flex",
															gap: 1,
														}}
													>
														{developer.isAvailable && (
															<Chip
																variant="soft"
																size="sm"
																color="success"
																sx={{
																	borderRadius: "10rem",
																	px: 1,
																}}
															>
																Available
															</Chip>
														)}
													</Box>
												</CardOverflow>

												<CardContent>
													<Box
														sx={{
															mt: -5,
															display: "flex",
															alignItems: "flex-end",
															justifyContent: "space-between",
														}}
													>
														<Avatar
															src={developer.avatar}
															alt={developer.name}
															size="lg"
															sx={{
																border: "3px solid",
																borderColor: "background.surface",
																width: 64,
																height: 64,
															}}
														/>
														<Box
															sx={{
																display: "flex",
																gap: 1,
															}}
														>
															<IconButton
																variant="soft"
																size="sm"
																color={
																	likedDevelopers.includes(developer.id)
																		? "danger"
																		: "neutral"
																}
																onClick={() => toggleLike(developer.id)}
															>
																<Heart
																	size={16}
																	fill={
																		likedDevelopers.includes(developer.id)
																			? "currentColor"
																			: "none"
																	}
																/>
															</IconButton>
															<IconButton
																component="a"
																href={`/message/${developer.id}`}
																variant="soft"
																size="sm"
															>
																<MessageCircle size={16} />
															</IconButton>
														</Box>
													</Box>

													<Typography
														level="title-lg"
														sx={{
															mt: 2,
															fontWeight: 700,
														}}
													>
														{developer.name}
													</Typography>

													<Typography
														level="body-sm"
														sx={{
															color: "text.secondary",
															mb: 1,
														}}
													>
														{developer.title}
													</Typography>

													<Stack
														direction="row"
														spacing={1}
														sx={{
															mb: 1,
															alignItems: "center",
														}}
													>
														<MapPin size={14} />
														<Typography level="body-xs">
															{developer.location}
														</Typography>
													</Stack>

													<Stack
														direction="row"
														spacing={1}
														sx={{
															mb: 1,
															alignItems: "center",
														}}
													>
														<Briefcase size={14} />
														<Typography level="body-xs">
															{developer.experience} experience
														</Typography>
													</Stack>

													<Stack
														direction="row"
														spacing={1}
														sx={{
															mb: 2,
															alignItems: "center",
														}}
													>
														<Calendar size={14} />
														<Typography level="body-xs">
															{developer.availability}
														</Typography>
													</Stack>

													<Stack
														direction="row"
														flexWrap="wrap"
														spacing={1}
														useFlexGap
														sx={{ mb: 2, gap: 0.5 }}
													>
														{developer.skills.slice(0, 3).map((skill) => (
															<Chip key={skill} size="sm" variant="soft">
																{skill}
															</Chip>
														))}
														{developer.skills.length > 3 && (
															<Chip size="sm" variant="soft">
																+{developer.skills.length - 3}
															</Chip>
														)}
													</Stack>

													<Button
														component="a"
														href={`/developer/${developer.id}`}
														fullWidth
														variant="solid"
														color="primary"
														endDecorator={<ExternalLink size={14} />}
														sx={{ mt: "auto" }}
													>
														View Profile
													</Button>
												</CardContent>
											</Card>
										</motion.div>
									</Grid>
								))}
							</Grid>
						)}

						{/* List View */}
						{viewMode === "list" && (
							<Stack spacing={2}>
								{filteredDevelopers.map((developer, index) => (
									<motion.div
										key={developer.id}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{
											duration: 0.3,
											delay: index * 0.05,
										}}
									>
										<Card
											variant="outlined"
											orientation="horizontal"
											sx={{
												gap: { xs: 0, sm: 2 },
												flexDirection: {
													xs: "column",
													sm: "row",
												},
												transition: "all 0.3s ease",
												"&:hover": {
													boxShadow: "md",
													transform: "translateY(-3px)",
												},
											}}
										>
											<Avatar
												src={ developer.avatar }
												alt={ developer.name }
												sx={{
													width: {
														xs: 96,
														md: 120,
													},
													height: {
														xs: 96,
														md: 120,
													},
													border: "4px solid",
													borderColor: "background.surface",
												}}
											/>
											<CardContent>
												<Box
													sx={{
														display: "flex",
														flexDirection: {
															xs: "column",
															sm: "row",
														},
														justifyContent: "space-between",
														alignItems: {
															xs: "flex-start",
															sm: "center",
														},
														mb: 1,
														gap: { xs: 1, sm: 0 },
													}}
												>
													<Box>
														<Typography level="title-md">
															{developer.name}
															{developer.isAvailable && (
																<Chip
																	variant="soft"
																	size="sm"
																	color="success"
																	sx={{
																		ml: 1,
																		fontSize: "0.65rem",
																		borderRadius: "10rem",
																	}}
																>
																	Available
																</Chip>
															)}
														</Typography>
														<Typography
															level="body-sm"
															sx={{
																color: "text.secondary",
															}}
														>
															{developer.title}
														</Typography>
													</Box>

													<Box
														sx={{
															display: "flex",
															gap: 1,
														}}
													>
														<IconButton
															variant="soft"
															size="sm"
															color={
																likedDevelopers.includes(developer.id)
																	? "danger"
																	: "neutral"
															}
															onClick={() => toggleLike(developer.id)}
														>
															<Heart
																size={16}
																fill={
																	likedDevelopers.includes(developer.id)
																		? "currentColor"
																		: "none"
																}
															/>
														</IconButton>
														<IconButton
															component="a"
															href={`/message/${developer.id}`}
															variant="soft"
															size="sm"
														>
															<MessageCircle size={16} />
														</IconButton>
														<Button
															component="a"
															href={`/developer/${developer.id}`}
															variant="solid"
															color="primary"
															size="sm"
															endDecorator={<ExternalLink size={14} />}
														>
															View
														</Button>
													</Box>
												</Box>

												<Typography level="body-sm" sx={{ mb: 2 }}>
													{developer.bio.substring(0, 120)}
													{developer.bio.length > 120 ? "..." : ""}
												</Typography>

												<Box
													sx={{
														display: "flex",
														flexWrap: "wrap",
														gap: 3,
														mb: 2,
													}}
												>
													<Box
														sx={{
															display: "flex",
															alignItems: "center",
															gap: 1,
														}}
													>
														<MapPin size={14} />
														<Typography level="body-xs">
															{developer.location}
														</Typography>
													</Box>
													<Box
														sx={{
															display: "flex",
															alignItems: "center",
															gap: 1,
														}}
													>
														<Briefcase size={14} />
														<Typography level="body-xs">
															{developer.experience} experience
														</Typography>
													</Box>
													<Box
														sx={{
															display: "flex",
															alignItems: "center",
															gap: 1,
														}}
													>
														<Calendar size={14} />
														<Typography level="body-xs">
															{developer.availability}
														</Typography>
													</Box>
												</Box>

												<Stack
													direction="row"
													flexWrap="wrap"
													spacing={1}
													useFlexGap
													sx={{ gap: 0.5 }}
												>
													{developer.skills.slice(0, 5).map((skill) => (
														<Chip key={skill} size="sm" variant="soft">
															{skill}
														</Chip>
													))}
													{developer.skills.length > 5 && (
														<Chip size="sm" variant="soft">
															+{developer.skills.length - 5}
														</Chip>
													)}
												</Stack>
											</CardContent>
										</Card>
									</motion.div>
								))}
							</Stack>
						)}

						{filteredDevelopers.length === 0 && (
							<Box
								sx={{
									textAlign: "center",
									py: 8,
								}}
							>
								<Typography level="h4" sx={{ mb: 2 }}>
									No developers found
								</Typography>
								<Typography
									level="body-md"
									sx={{ mb: 4, color: "text.secondary" }}
								>
									Try adjusting your filters or search query
								</Typography>
								<Button
									variant="outlined"
									color="neutral"
									onClick={resetFilters}
								>
									Reset Filters
								</Button>
							</Box>
						)}
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
