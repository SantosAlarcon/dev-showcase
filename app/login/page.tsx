import { Box, Grid } from "@mui/joy";

const LoginPage = () => {
	return (
		<Grid container columns={{xs: 1, md: 2}} height={"100vh"} sx={{
			backgroundImage: "url(/DevBG.webp)",
		}}>
			<Grid sx={{ width: { xs: "100%", sm: "50%" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Box>Login</Box>
			</Grid>
			<Grid sx={{ width: { xs: "100%", sm: "50%" }, display: "flex", justifyContent: "center", alignItems: "center" }}>
				<Box>Pepe</Box>
			</Grid>
		</Grid>
	)
}

export default LoginPage;
