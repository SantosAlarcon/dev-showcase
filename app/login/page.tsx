import LoginComponent from "@/components/ui/LoginComponent";
import { Box, Grid } from "@mui/joy";
import { Toaster } from "react-hot-toast";

const LoginPage = () => {
    return (
        <>
            <Grid
                container
                height={"100vh"}
				p={4}
                sx={{
                    backgroundImage: "url(/DevBG.webp)",
					gap: 4,
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                }}
            >
                <Grid
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box>DevShowcase</Box>
                </Grid>
                <Grid
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <LoginComponent />
                    </Box>
                </Grid>
            </Grid>
            <Toaster toastOptions={{ duration: 3000 }} />
        </>
    );
};

export default LoginPage;
