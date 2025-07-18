import RegisterComponent from "@/components/ui/RegisterComponent";
import { Box, Grid } from "@mui/joy";

const RegisterPage = () => {
	return (
		<Grid container columns={{xs: 1, md: 2}} height={"100vh"} sx={{
			backgroundImage: "url(/DevBG.webp)",
		}}>
			<Grid sx={{ width: { xs: "100%", sm: "50%" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Box>DevShowcase</Box>
			</Grid>
			<Grid sx={{ width: { xs: "100%", sm: "50%" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Box>
                    <RegisterComponent />
                </Box>
			</Grid>
		</Grid>
	)
}

export default RegisterPage;
