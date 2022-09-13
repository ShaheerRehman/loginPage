import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Chip, Divider, FormControl, FormHelperText } from "@mui/material";
import samosa from "./assets/samosa.jpg";

const theme = createTheme({
  palette: {
    primary: {
      main: "#704232",
    },
  },
});

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={false}
          md={6}
          sx={{
            backgroundImage: `url(${samosa})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                mb: 4,
                fontWeight: "bold",
              }}
              component="h1"
              variant="h5"
            >
              BF
            </Typography>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <PersonIcon sx={{ color: "primary.main", mr: 2, my: 0.5 }} />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Mobile or Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="standard"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockIcon sx={{ color: "primary.main", mr: 2, my: 0.5 }} />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="standard"
                />
              </Box>
              <Box sx={{ display: "flex", justifyContent: "flex-end", my: 1 }}>
                <FormControl>
                  <Link href="#">
                    <FormHelperText id="my-helper-text">
                      Forget Password?
                    </FormHelperText>
                  </Link>
                </FormControl>
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, borderRadius: 3 }}
              >
                Sign In
              </Button>
              <Divider sx={{ my: 2 }}>
                <Chip label="OR" />
              </Divider>
              <Box
                sx={{ display: "flex", justifyContent: "space-around", my: 2 }}
              >
                <Link href="#">
                  <GoogleIcon color="primary" />
                </Link>
                <Link href="#">
                  <FacebookRoundedIcon color="primary" />
                </Link>
                <Link href="#">
                  <TwitterIcon color="primary" />
                </Link>
              </Box>
              <Grid container>
                <Grid item xs>
                  <Typography variant="body1" sx={{ fontSize: "0.875rem" }}>
                    Need an account?
                  </Typography>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
