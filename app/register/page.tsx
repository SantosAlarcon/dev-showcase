import RegisterComponent from "@/components/ui/RegisterComponent";
import { Box, Grid } from "@mui/joy";
import { Toaster } from "react-hot-toast";

const RegisterPage = () => {
    return (
        <>
            <Grid
                container
                columns={{ xs: 1, md: 2 }}
                height={"100vh"}
                sx={{
                    backgroundImage: "url(/DevBG.webp)",
                }}
            >
                <Grid
                    sx={{
                        width: { xs: "100%", sm: "50%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box>DevShowcase</Box>
                </Grid>
                <Grid
                    sx={{
                        width: { xs: "100%", sm: "50%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <RegisterComponent />
                    </Box>
                </Grid>
            </Grid>
			<Toaster toastOptions={{ duration: 1500 }} />
        </>
    );
};

export default RegisterPage;
