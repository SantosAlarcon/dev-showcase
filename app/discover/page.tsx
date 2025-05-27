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
	Chip,
	Stack,
	IconButton,
	Button,
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
	Search,
	Filter,
	LayoutPanelLeft,
	LayoutGrid,
} from "lucide-react";

import developersData from "@/data/mockDeveloperData";
import { getAllSkills } from "@/utils/developers/getAllSkills";
import GridDeveloperCard from "@/components/ui/GridDeveloperCard";
import { DeveloperInfo, ViewModeTypes } from "@/types/types";
import ListDeveloperCard from "@/components/ui/ListDeveloperCard";

// Filters
// const experienceLevels = ["Any", "1-2 years", "3-5 years", "5+ years"];
const isAvailableTypes = ["Any", "Full-time", "Contract", "Freelance"];

export default function DiscoverPage() {
	const [searchQuery, setSearchQuery] = useState("");
	// const [selectedExperience, setSelectedExperience] = useState("Any");
	const [selectedAvailability, setSelectedAvailability] = useState("Any");
	const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
	const [viewMode, setViewMode] = useState<ViewModeTypes>("grid");
	const [likedDevelopers, setLikedDevelopers] = useState<string[]>([]);
	const [filteredDevelopers, setFilteredDevelopers] = useState(developersData);
	const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

	const toggleLike = (id: string) => {
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
		let results = developersData;

		// Search filter
		if (searchQuery) {
			const query = searchQuery.toLowerCase();
			results = results.filter(
				(dev) =>
					dev.name.toLowerCase().includes(query) ||
					dev.title.toLowerCase().includes(query) ||
					dev.bio.toLowerCase().includes(query) ||
					getAllSkills(dev.skills).some((skill) =>
						skill.toLowerCase().includes(query),
					),
			);
		}

		// Experience filter
		/*if (selectedExperience !== "Any") {
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
		}*/

		// Availability filter
		if (selectedAvailability !== "Any") {
			results = results.filter(
				(dev) => dev.availability === selectedAvailability,
			);
		}

		// Skills filter
		if (selectedSkills.length > 0) {
			results = results.filter((dev) =>
				selectedSkills.some((skill) =>
					getAllSkills(dev.skills).includes(skill),
				),
			);
		}

		setFilteredDevelopers(results);
		setMobileFilterOpen(false);
	};

	const resetFilters = () => {
		setSearchQuery("");
		// setSelectedExperience("Any");
		setSelectedAvailability("Any");
		setSelectedSkills([]);
		setFilteredDevelopers(developersData);
	};

	return (
		<Box
			sx={{
				py: { xs: 4, md: 8 },
				px: 2,
				bgcolor: "background.body",
			}}
		>
			<Container maxWidth="lg" sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
				>
					<Typography
						level="h1"
						sx={{
							fontWeight: 800,
							fontSize: { xs: "2rem", md: "2.5rem" },
						}}
					>
						Discover developers
					</Typography>
					<Typography
						level="body-lg"
						sx={{
							color: "text.secondary",
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

							{/* <FormControl sx={{ mb: 2 }>
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
							</FormControl> */}

							<FormControl sx={{ mb: 2 }}>
								<FormLabel>Availability</FormLabel>
								<Select
									value={selectedAvailability}
									onChange={(_, value) =>
										setSelectedAvailability(value as string)
									}
								>
									{isAvailableTypes.map((type) => (
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
							paddingX: 2,
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Button
							variant="outlined"
							color="neutral"
							startDecorator={<Filter size={16} />}
							onClick={() => setMobileFilterOpen(true)}
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

							{/* <FormControl sx={{ mb: 2 }}>
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
							</FormControl> */}

							<FormControl sx={{ mb: 2 }}>
								<FormLabel>Availability</FormLabel>
								<Select
									value={selectedAvailability}
									onChange={(_, value) =>
										setSelectedAvailability(value as string)
									}
								>
									{isAvailableTypes.map((type) => (
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
								{filteredDevelopers.map(
									(developer: DeveloperInfo, index: number) => (
										<GridDeveloperCard
											key={developer.id}
											developer={developer}
											index={index}
											toggleLike={toggleLike}
											isLiked={likedDevelopers.includes(developer.id)}
										/>
									),
								)}
							</Grid>
						)}

						{/* List View */}
						{viewMode === "list" && (
							<Stack spacing={2}>
								{filteredDevelopers.map((developer, index) => (
									<ListDeveloperCard key={developer.id} developer={developer} index={index} toggleLike={toggleLike} isLiked={likedDevelopers.includes(developer.id)} />
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
