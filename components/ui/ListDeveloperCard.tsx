import { DeveloperInfo } from "@/types/types";
import { getAllSkills } from "@/utils/developers/getAllSkills";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    IconButton,
    Link,
    Stack,
    Tooltip,
    Typography,
} from "@mui/joy";
import { Briefcase, Heart, MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const ListDeveloperCard = ({
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
    return (
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
                    gap: 2,
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
                    src={developer.avatar}
                    alt={developer.name}
                    href={`/developer/${developer.id}`}
                    component={Link}
                    aria-label={`Go to ${developer.name} ${developer.surname}'s profile`}
                    sx={{
                        width: {
                            xs: 96,
                            md: 120,
                        },
                        height: {
                            xs: 96,
                            md: 120,
                        },
                    }}
                />
                <CardContent sx={{ gap: 1.5 }}>
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
                            gap: { xs: 1, sm: 0 },
                        }}
                    >
                        <Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <Typography level="title-lg" fontWeight={700} fontSize={"1.5rem"}>
                                    <Link
                                        aria-label={`Go to ${developer.name} ${developer.surname} profile`}
                                        href={`/developer/${developer.id}`}
                                        sx={{ color: "inherit" }}
                                    >
                                        {`${developer.name} ${developer.surname}`}
                                    </Link>
                                </Typography>
                                {(developer.availability === "Freelance" ||
                                    developer.availability === "Full-time") && (
                                    <Chip
                                        variant="soft"
                                        size="sm"
                                        color="success"
                                        sx={{
                                            fontSize: "0.65rem",
                                            borderRadius: "10rem",
                                        }}
                                    >
                                        Available
                                    </Chip>
                                )}
                            </Box>
                            <Typography
                                level="body-md"
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
                            <Tooltip
                                title={isLiked ? "Unlike" : "Like"}
                                variant="solid"
                                arrow
                            >
                                <IconButton
                                    variant="soft"
                                    size="sm"
                                    aria-label={isLiked ? "Unlike" : "Like"}
                                    onClick={() => toggleLike(developer.id)}
                                >
                                    <Heart
                                        size={16}
										stroke={isLiked ? "red" : "currentColor"}
                                        fill={isLiked ? "red" : "none"}
                                    />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Send message" variant="solid" arrow>
                                <IconButton
                                    component="a"
                                    href={`/message/${developer.id}`}
                                    variant="soft"
                                    aria-label="Send message"
                                    size="sm"
                                >
                                    <MessageCircle size={16} />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Box>

                    <Typography level="body-md" textColor="text.primary">
                        {developer.bio}
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 3,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <MapPin size={19} />
                            <Typography
                                level="body-sm"
                                textColor="text.primary"
                            >
                                {developer.city}
                            </Typography>
                        </Box>
                        {/* <Box
							sx={{
								display: "flex",
								alignItems:
									"center",
								gap: 1,
							}}
						>
							<Briefcase size={14} />
							<Typography level="body-xs">
								{
									developer.experience
								}{" "}
								experience
							</Typography>
						</Box> */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                            }}
                        >
                            <Briefcase size={19} />
                            <Typography
                                level="body-sm"
                                textColor="text.primary"
                            >
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
                        {getAllSkills(developer.skills)
                            .slice(0, 5)
                            .map((skill) => (
                                <Chip key={skill} size="sm" variant="soft">
                                    {skill}
                                </Chip>
                            ))}
                        {getAllSkills(developer.skills).length > 5 && (
                            <Chip size="sm" variant="soft">
                                +{getAllSkills(developer.skills).length - 5}
                            </Chip>
                        )}
                    </Stack>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default ListDeveloperCard;
