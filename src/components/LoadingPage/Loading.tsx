import { Backdrop, CircularProgress, Typography } from "@mui/material";

const LoadingPage = () => (
  <Backdrop
    open
    sx={{
      color: "#fff",
      zIndex: (theme) => theme.zIndex.drawer + 1,
      flexDirection: "column",
    }}
  >
    <CircularProgress color="inherit" size={60} />
    <Typography variant="h6" mt={2}>
      Loading, please wait...
    </Typography>
  </Backdrop>
);

export default LoadingPage;
