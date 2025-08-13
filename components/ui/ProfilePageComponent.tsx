import { DeveloperInfo } from "@/src/domain/entities/developer";
import { Avatar, Box, Container, Typography } from "@mui/joy";

const ProfilePageComponent = ({developer}: {developer: DeveloperInfo}) => {
	return (
		<Container maxWidth="lg">
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "3rem",
                backgroundColor: "primary.main",
                gap: "1rem",
            }}>
                <Avatar sx={{
                    width: 128,
                    height: 128,
                    bgcolor: "secondary.main",
                    color: "primary.contrastText",
                    fontSize: 64,
                }}>
                    {developer.name.charAt(0)}
                </Avatar>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                }}>
                    <Typography level="h1" gutterBottom>
                        {developer.name} {developer.surname}
                    </Typography>
                    <Typography level="body-lg">
                        {developer.title} from {developer.city}
                    </Typography>
                </Box>
            </Box>
		</Container>
	);
};

export default ProfilePageComponent;
