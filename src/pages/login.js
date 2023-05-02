import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Snackbars from "@/components/alert";

const URL = "/api/auth/clients/login";
const URL2 = "/api/auth/compra/setCarritoCompra";

export default function Login() {
  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState(false);
  const [values, setValues] = useState({
    email: undefined,
    password: undefined,
  });
  const router = useRouter();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const carrito = await axios.get(URL2);
    const res = await axios.post(URL, values);

    const { estado, message, id, rool } = res.data;

    if (!estado) {
      setMensaje(message);
      setOpen(true);
    } else {
      setEstado(true);
      setMensaje(message);
      setOpen(true);

      if (estado && rool === 1) {
        router.push("/dashboard");
      } else if (estado && rool === 2) {
        if (carrito.data) {
          router.push("/informacionCompra");
        } else {
          router.push(`/cuenta/${id}`);
        }
      }
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Snackbars
        handleClick={handleLogin}
        handleClose={(event, reason) => handleClose(event, reason)}
        open={open}
        mensaje={mensaje}
        estado={estado}
      />
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
          marginTop: 12,
        }}
      >
        <Container maxWidth="sm">
          <NextLink href="/">
            <Button startIcon={<ArrowBackIcon fontSize="small" />}>
              inicio
            </Button>
          </NextLink>
          <Box component="form" onSubmit={handleLogin}>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in
              </Typography>
            </Box>

            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
              onChange={handleChange}
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              No tienes una cuenta?
              <Link
                href="/register"
                variant="subtitle2"
                underline="hover"
                sx={{
                  cursor: "pointer",
                }}
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
