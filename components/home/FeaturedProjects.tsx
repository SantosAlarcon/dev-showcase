"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
	Box,
	Typography,
	Container,
	Grid,
	Card,
	Stack,
	Chip,
	AspectRatio,
	Button,
	CardContent,
	CardOverflow,
} from "@mui/joy";
import { ChevronRight } from "lucide-react";
import { projectsData } from "@/data/mockProjectData";
import { Project } from "@/types/types";
import { getDeveloperInfo } from "@/utils/developers/getDeveloperInfo";
import getFullNameById from "@/utils/developers/getFullNameById";

const projectList = projectsData.slice(0, 9);

export default function Featuredrojects() {
	return (
		<Box
			sx={{
				py: { xs: 8, md: 12 },
				px: 2,
				bgcolor: "background.surface",
			}}
		>
			<Container>
				<Box
					sx={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: { xs: "flex-start", sm: "center" },
						flexDirection: { xs: "column", sm: "row" },
						mb: 6,
						gap: 2,
					}}
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<Typography
							level="title-md"
							sx={{
								color: "primary.500",
								fontWeight: 600,
								mb: 1,
							}}
						>
							Showcase
						</Typography>
						<Typography
							level="h2"
							sx={{
								mb: { xs: 1, sm: 0 },
								fontWeight: 700,
								fontSize: { xs: "1.75rem", md: "2.25rem" },
							}}
						>
							Featured Projects
						</Typography>
					</motion.div>

					<Button
						component={Link}
						href="/projects"
						variant="outlined"
						color="neutral"
						endDecorator={<ChevronRight size={16} />}
					>
						View All Projects
					</Button>
				</Box>

				<Grid container spacing={3}>
					{projectList.map((project: Project, index: number) => (
						<Grid key={project.id} xs={12} md={6}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
								viewport={{ once: true }}
							>
								<Card
									variant="outlined"
									orientation="horizontal"
									sx={{
										paddingY: "1.5rem",
										flexDirection: {
											xs: "column",
											sm: "row",
										},
										height: "100%",
										overflow: "hidden",
										transition: "all 0.3s ease",
										"&:hover": {
											boxShadow: "md",
											transform: "translateY(-5px)",
										},
									}}
								>
									<CardOverflow
										sx={{
											width: { xs: "100%", sm: "45%" },
											minHeight: {
												xs: "200px",
												sm: "auto",
											},
										}}
									>
										<AspectRatio ratio="16/9" sx={{ height: "100%" }}>
											<img
												src={project.image}
												alt={project.title}
												style={{ objectFit: "cover" }}
											/>
										</AspectRatio>
									</CardOverflow>

									<CardContent>
										<Typography
											component={Link}
											href={`/project/${project.id}`}
											level="title-md"
											sx={{
												mb: 1,
												fontWeight: 700,
												textDecoration: "none",
												"&:hover": { textDecoration: "underline" },
											}}
											aria-label={`View ${project.title} project page`}
										>
											{project.title}
										</Typography>

										<Typography
											level="body-sm"
											sx={{
												color: "text.secondary",
												mb: 2,
											}}
										>
											{project.description}
										</Typography>

										<Stack
											direction="row"
											spacing={1}
											useFlexGap
											sx={{
												mb: 2,
												flexWrap: "wrap",
												gap: 0.5,
											}}
										>
											{project.technologies.map((tech) => (
												<Chip key={tech} size="sm" variant="soft">
													{tech}
												</Chip>
											))}
										</Stack>

										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												gap: 1,
											}}
										>
											<Box
												component="img"
												src={getDeveloperInfo(project.userId).avatar}
												alt={getFullNameById(project.userId)}
												sx={{
													width: 24,
													height: 24,
													borderRadius: "50%",
													objectFit: "cover",
												}}
											/>
											<Typography
												level="body-sm"
												sx={{ color: "text.secondary" }}
											>
												by{" "}
												<Link
													style={{ color: "inherit", textDecoration: "none", fontWeight: 600 }}
													aria-label={`Go to ${getFullNameById(project.userId)}'s profile'`}
													href={`/developer/${project.userId}`}
												>
													{getFullNameById(project.userId)}
												</Link>
											</Typography>
										</Box>
									</CardContent>
								</Card>
							</motion.div>
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
