import { Link } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";

const UserNotFound = () => {
    return (
        <Box
            component="main"
            px={4}
            py={{ xs: 4, sm: 24 }}
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <h1>This project cannot be found</h1>
            <Typography
                level="body-md"
                display="flex"
                alignItems={"center"}
                flexDirection={"column"}
                gap={2}
                sx={{ textDecoration: "none" }}
            >
                This project may have been deleted or the link may be broken.
                But don't worry, you can discover new projects by clicking this
                button below.
                <Button
                    component={Link}
                    href="/projects"
                    sx={{ width: "fit-content" }}
                    aria-label="Discover new projects"
                >
                    Discover new projects
                </Button>
            </Typography>
        </Box>
    );
};

export default UserNotFound;
