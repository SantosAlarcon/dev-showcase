import RegisterComponent from "@/components/ui/RegisterComponent";
import { Box, Grid } from "@mui/joy";
import { Toaster } from "react-hot-toast";

const RegisterPage = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    height={"100vh"}
                    p={4}
                    sx={{
						display: "grid",
						gap: { xs: 4, sm: 4, md: 4, lg: 4, xl: 32 },
						gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        backgroundImage: "url(/DevBG.webp)",
                    }}
                >
                    <Grid
                        sx={{
                            minWidth: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box>DevShowcase</Box>
                    </Grid>
                    <Grid
                        sx={{
                            width: { sm: "100%", md: "100%", lg: "85%", xl: "70%" },
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box width={"100%"}>
                            <RegisterComponent />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Toaster toastOptions={{ duration: 3500 }} />
        </>
    );
};

export default RegisterPage;
