import {
    Avatar,
    CardContent,
    IconButton,
    Link,
    Stack,
    Typography,
    Tooltip,
    Grid,
    Box,
    AspectRatio,
    Card,
    CardOverflow,
    Chip,
} from "@mui/joy";
import { motion } from "motion/react";
import Image from "next/image";
import { Heart, MapPin, Briefcase, MessageCircle } from "lucide-react";
import { AppwriteDeveloperRepository } from "@/src/infrastructure/data/AppwriteDeveloperRepository";
import { GetAllSkillsUseCase } from "@/src/application/use-cases/developers/GetAllSkillsUseCase";
import { DeveloperInfo } from "@/src/domain/entities/developer";

const GridDeveloperCard = ({
    developer,
    index,
    toggleLike,
    isLiked,
}: {
    developer: DeveloperInfo;
    index: number;
    toggleLike: (id: string) => void;
    isLiked: boolean;
}) => {
	const developerRepository = new AppwriteDeveloperRepository();
	const getAllSkillsUseCase = new GetAllSkillsUseCase(developerRepository);

	// @ts-ignore
	const skills = getAllSkillsUseCase.execute(developer.skills);

    return (
        <Grid xs={12} sm={6} md={4} lg={4} xl={4}>
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
                            <object
                                type="image/webp"
                                data={developer.bannerImage}
                                width="1920"
                                height="1080"
                                aria-label="Background image"
                            >
                                <Image
                                    // @ts-ignore
                                    src={"/empty.webp"}
                                    alt={`${developer.name} ${developer.surname}'s background image`}
                                    style={{ objectFit: "cover" }}
                                    width={512}
                                    height={512}
                                    priority
                                    decoding="async"
                                />
                            </object>
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
                            {(developer.availability === "Freelance" ||
                                developer.availability === "Full-time") && (
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

                    <CardContent sx={{ gap: 1.5 }}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "flex-end",
                                justifyContent: "space-between",
                            }}
                        >
                            <Avatar
                                src={developer.avatar}
                                alt={`${developer.name} ${developer.surname}'s photo`}
                                href={`/developer/${developer.id}`}
                                component={Link}
                                aria-label={`Go to ${developer.name} ${developer.surname}'s profile`}
                                size="sm"
                                sx={{
                                    width: 64,
                                    height: 64,
                                }}
                            />
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <IconButton
                                    variant="soft"
                                    size="sm"
                                    onClick={() => toggleLike(developer.id)}
                                    aria-label="Like"
                                >
                                    <Tooltip title={isLiked ? "Unlike" : "Like"} variant="solid" arrow>
                                        <Heart size={20} fill={isLiked ? "red" : "none"} stroke={isLiked ? "red" : "currentColor"} />
                                    </Tooltip>
                                </IconButton>
                                <IconButton
                                    component={Link}
                                    href={`/message/${developer.id}`}
                                    variant="soft"
                                    aria-label="Send message"
                                    size="sm"
                                >
                                    <Tooltip
                                        title="Send message"
                                        variant="solid"
                                        arrow
                                    >
                                        <MessageCircle size={19} />
                                    </Tooltip>
                                </IconButton>
                            </Box>
                        </Box>

                        <Box>
                            <Link
                                href={`/developer/${developer.id}`}
                                aria-label={`Go to ${developer.name} ${developer.surname}'s profile`}
                                level="title-lg"
                                fontWeight={700}
								fontSize={"1.25rem"}
                                textColor={"text.primary"}
                            >
                                {developer.name} {developer.surname}
                            </Link>
                            <Typography
                                level="body-sm"
                                sx={{
                                    color: "text.primary",
                                }}
                            >
                                {developer.title}
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 1,
                                justifyContent: "center",
                            }}
                        >
                            <Typography
                                level="body-sm"
                                sx={{
                                    color: "text.primary",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.75,
                                }}
                            >
                                <MapPin stroke="currentColor" strokeWidth={1} size={19} />
                                {developer.city}
                            </Typography>
                            <Typography
                                level="body-sm"
                                sx={{
                                    color: "text.primary",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.75,
                                }}
                            >
                                <Briefcase stroke="currentColor" strokeWidth={1} size={19} />
                                {developer.availability}
                            </Typography>
                        </Box>

                        <Stack
                            direction="row"
                            flexWrap="wrap"
                            spacing={1}
                            useFlexGap
                            sx={{ horizontalGap: 0.5, verticalGap: 1 }}
                        >
                            {skills
                                .slice(0, 4)
                                .map((skill: string) => (
                                    <Chip key={skill} size="sm" variant="soft">
                                        {skill}
                                    </Chip>
                                ))}

                            {skills.length > 4 && (
                                <Chip size="sm" variant="soft">
                                    +{skills.length - 4}
                                </Chip>
                            )}
                        </Stack>
                    </CardContent>
                </Card>
            </motion.div>
        </Grid>
    );
};

export default GridDeveloperCard;
