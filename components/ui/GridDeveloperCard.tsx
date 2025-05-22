import { DeveloperInfo } from "@/types/types";
import {
    Avatar,
    Button,
    CardContent,
    IconButton,
    Link,
    Stack,
    Typography,
	Tooltip
} from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import { motion } from "motion/react";
import Image from "next/image";
import LocationIcon from "@mui/icons-material/LocationPin";
import ChatBubbleIcon from "@mui/icons-material/ChatBubbleOutline";
import Heart from "@mui/icons-material/Favorite";
import HeartOutline from "@mui/icons-material/FavoriteOutlined";
import ExternalLink from "@mui/icons-material/OpenInNew";
import { getAllSkills } from "@/utils/developers/getAllSkills";

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
    return (
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
                        <Image
                            // @ts-ignore
                            src={developer.bannerImage}
                            alt={`${developer.name}'s cover`}
                            style={{ objectFit: "cover" }}
                            width={512}
                            height={512}
                            loading="lazy"
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
                            size="sm"
                            sx={{
                                border: "3px solid",
                                borderColor: "background.surface",
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
								{isLiked ? <Heart /> : <HeartOutline />}
                            </IconButton>
                            <IconButton
                                component={Link}
                                href={`/message/${developer.id}`}
                                variant="soft"
								aria-label="Send message"
                                size="sm"
                            >
								<Tooltip title="Send message" variant="solid" arrow>
									<ChatBubbleIcon />
								</Tooltip>
                            </IconButton>
                        </Box>
                    </Box>

                    <Typography
                        level="title-md"
                        sx={{ mt: 2, fontWeight: 600 }}
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

                    <Typography
                        level="body-sm"
                        sx={{
                            color: "text.secondary",
                            mb: 1,
                            display: "flex",
                            alignItems: "center",
                            gap: 0.5,
                        }}
                    >
                        <LocationIcon />
                        {developer.city}
                    </Typography>

                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        spacing={1}
                        useFlexGap
                        sx={{ mb: 2, gap: 0.5 }}
                    >
                        {getAllSkills(developer.skills)
                            .slice(0, 4)
                            .map((skill: string) => (
                                <Chip key={skill} size="sm" variant="soft">
                                    {skill}
                                </Chip>
                            ))}

                        {getAllSkills(developer.skills).length > 4 && <Chip size="sm" variant="soft">
                            +{getAllSkills(developer.skills).length - 4}
                        </Chip> }
                    </Stack>

                    <Button
                        component={Link}
                        href={`/developer/${developer.id}`}
                        fullWidth
                        variant="solid"
                        color="primary"
                        endDecorator={<ExternalLink />}
                        sx={{ mt: "auto" }}
                    >
                        View Profile
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default GridDeveloperCard;
