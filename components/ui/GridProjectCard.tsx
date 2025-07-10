import { GetDeveloperByIdUseCase } from "@/src/application/use-cases/developers/GetDeveloperByIdUseCase";
import { Project } from "@/src/domain/entities/project";
import { AppwriteDeveloperRepository } from "@/src/infrastructure/data/AppwriteDeveloperRepository";
import { Box, Card, CardContent, CardOverflow, Chip, Grid, Link, Stack, Typography } from "@mui/joy";
import * as motion from "motion/react-client";
import Image from "next/image";

const GridProjectCard = async ({ project, index }: { project: Project, index: number }) => {
	const developerRepository = new AppwriteDeveloperRepository();
	const getDeveloperByIdUseCase = new GetDeveloperByIdUseCase(developerRepository);
	const developer = await getDeveloperByIdUseCase.execute(project.developerId);
	const fullName = developer.name + " " + developer.surname;

	return (
		<Grid key={project.$id} xs={12} md={6}>
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
						gap: 3,
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
							alignSelf: "end",
							margin: 0,
							width: { xs: "100%", sm: "45%" },
							minHeight: {
								xs: "200px",
								sm: "auto",
							},
						}}
					>
						<Image
							width={"200"}
							height={"200"}
							src={project.image}
							alt={project.title}
							style={{ objectFit: "cover", borderRadius: "1rem", width: "100%" }}
						/>
					</CardOverflow>

					<CardContent sx={{ gap: 3, justifyContent: "center" }}>
						<Typography
							component={Link}
							href={`/project/${project.$id}`}
							level="title-md"
							sx={{
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
							}}
						>
							{project.description}
						</Typography>

						<Stack
							direction="row"
							spacing={1}
							useFlexGap
							sx={{
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
								src={developer.avatar}
								alt={fullName}
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
									aria-label={`Go to ${fullName}'s profile'`}
									href={`/developer/${project.developerId}`}
								>
									{fullName}
								</Link>
							</Typography>
						</Box>
					</CardContent>
				</Card>
			</motion.div>
		</Grid>

	);
};

export default GridProjectCard;
