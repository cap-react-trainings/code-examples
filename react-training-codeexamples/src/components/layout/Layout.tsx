import { Box, CircularProgress, Typography } from "@mui/material";
import { Outlet, useNavigation } from "react-router-dom";

export default function Layout() {
  const navigation = useNavigation();
  console.log("NAVIGATION STATE", navigation.state);
  return (
    <>
      {navigation.state === "loading" && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Typography variant='caption' sx={{ mb: 4 }}>
            data loading...
          </Typography>
          <CircularProgress size={80} thickness={4.5} sx={{ color: "#66bb6a" }} />
        </Box>
      )}
      {navigation.state !== "loading" && <Outlet />}
    </>
  );
}
