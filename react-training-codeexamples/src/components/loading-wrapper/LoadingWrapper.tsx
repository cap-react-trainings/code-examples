import { Box, CircularProgress, Typography } from "@mui/material";
import { FunctionComponent } from "react";

interface Props {
  children: React.ReactNode;
  loading: boolean;
}

const LoadingWrapper: FunctionComponent<Props> = ({ children, loading }: Props) => {
  return (
    <>
      {loading && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="caption" sx={{ mb: 4 }}>
            data loading...
          </Typography>
          <CircularProgress
            size={80}
            thickness={4.5}
            sx={{ color: "#66bb6a" }}
          />
        </Box>
      )}
      {!loading && children}
    </>
  );
};

export default LoadingWrapper;
