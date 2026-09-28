
import Wrapper from "../Components/Wrapper"
import {
  Box,
  Container,
  Typography,
  Button,
  Paper
} from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f5f7fa",
        px: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            p: { xs: 4, sm: 6 },
            textAlign: "center",
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h1"
            sx={{ mb: 2, fontSize: 70 }}
          >
            🚧
          </Typography>

          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
          >
            Page Under Maintenance
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, lineHeight: 1.7 }}
          >
            We are currently working on this page to improve your
            experience. Please check back again shortly.
          </Typography>

          <Button
            variant="contained"
            size="large"
            onClick={() => window.location.reload()}
            sx={{
              px: 4,
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            Refresh Page
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;