import { Testimonial } from "@/src/domain/entities/testimonial";
import { Avatar, Box, Card, Grid, Typography } from "@mui/joy";
import * as motion from "motion/react-client";
const TestimonialCard = ({
    testimonial,
    index,
}: { testimonial: Testimonial; index: number }) => {
    return (
        <Grid key={testimonial.id} xs={12} sm={6} md={4}>
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
                    variant="soft"
                    sx={{
                        p: 4,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
						alignItems: { xs: "center", md: "flex-start" },
                        position: "relative",
                        overflow: "visible",
                        transition: "all 0.3s ease",
                        border: "1px solid",
                        borderColor: "neutral.500",
                        "&:hover": {
                            transform: "translateY(-8px)",
                        },
                    }}
                >
                    <Typography
                        level="body-md"
                        sx={{
                            mb: 3,
                            fontStyle: "italic",
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        "{testimonial.content}"
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mt: "auto",
                        }}
                    >
                        <Avatar
                            src={testimonial.author.avatar}
                            alt={testimonial.author.name}
                        />
                        <Box>
                            <Typography
                                level="title-md"
                                sx={{ fontWeight: 700 }}
                            >
                                {testimonial.author.name}
                            </Typography>
                            <Typography
                                level="body-xs"
                                sx={{ color: "text.secondary" }}
                            >
                                {testimonial.author.role}
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            </motion.div>
        </Grid>
    );
};

export default TestimonialCard;
