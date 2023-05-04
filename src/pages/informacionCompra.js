import {
  Grid,
  Link,
  Typography,
  Box,
  TextField,
  Card,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import axios from "axios";

import MigasPanEnvios from "@/components/products/migasPanEnvios";
import ResumenCompra from "@/components/products/resumenCompra";
import Snackbars from "@/components/alert";
import { useRouter } from "next/router";
import Head from "next/head";

const URL = "/api/auth/compra/setUserCompra";

export default function informacionCompra() {
  const [activo, setActivo] = useState(true);
  const [open, setOpen] = useState(false);

  const [values, setValues] = useState({
    nombre: undefined,
    apellido: undefined,
    email: undefined,
    celular: undefined,
    departamento: undefined,
    ciudad: undefined,
    CC: undefined,
    direccion: undefined,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const SetUserCompra = async () => {
    const res = await axios.post(URL, values);
    console.log(res.data);
  };

  const router = useRouter();

  const handleClick = () => {
    if (
      values.nombre === undefined ||
      values.nombre.length > 100 ||
      values.apellido === undefined ||
      values.apellido.length > 100 ||
      values.email === undefined ||
      values.email.length > 255 ||
      values.celular === undefined ||
      values.celular.length > 10 ||
      values.departamento === undefined ||
      values.departamento.length > 100 ||
      values.ciudad === undefined ||
      values.ciudad.length > 100 ||
      values.direccion === undefined ||
      values.direccion.length > 100 ||
      values.CC === undefined ||
      values.CC.length > 10
    ) {
      setOpen(true);
    } else {
      SetUserCompra();
      router.push("/envios");
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    getUserCompra();
  }, []);

  const getUserCompra = async () => {
    const res = await axios.get(URL);
    setValues(res.data);
  };

  const handleClickCerrar = () => {
    setActivo(false);
  };

  return (
    <>
      <Head>
        <title>Informacion Compra</title>
      </Head>
      <Grid container>
        <Snackbars
          handleClick={handleClick}
          handleClose={(event, reason) => handleClose(event, reason)}
          open={open}
        />
        <Grid item md={7} lg={7}>
          <Card
            sx={{
              paddingLeft: { xs: 0, md: 7 },
              paddingRight: { xs: 0, md: 7 },
              paddingTop: 5,
              paddingBottom: 5,
            }}
          >
            <MigasPanEnvios />
            <Divider />
            <CardContent>
              <Grid
                container
                spacing={2}
                sx={{
                  justifyContent: "space-between",
                }}
              >
                <Grid item>
                  <Typography sx={{ fontSize: 19 }}>
                    Informacion de contacto
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ display: "inline", fontSize: 14, marginRight: 1 }}
                  >
                    ¿ya tienes cuenta?
                  </Typography>
                  <Link color="primary" underline="none" href="/login">
                    Inicia sesion
                  </Link>
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Email"
                    name="email"
                    onChange={handleChange}
                    required
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <Typography sx={{ fontSize: 19, marginBottom: 2 }}>
                Direccion de envio
              </Typography>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Nombre"
                    name="nombre"
                    onChange={handleChange}
                    required
                    value={values.nombre}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    size="small"
                    label="Apellido"
                    name="apellido"
                    onChange={handleChange}
                    required
                    value={values.apellido}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    required
                    size="small"
                    label="CC"
                    name="CC"
                    onChange={handleChange}
                    type="number"
                    value={values.CC}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    required
                    size="small"
                    label="Celular"
                    name="celular"
                    onChange={handleChange}
                    type="number"
                    value={values.celular}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    required
                    size="small"
                    label="Departamento"
                    name="departamento"
                    onChange={handleChange}
                    value={values.departamento}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    required
                    size="small"
                    label="Ciudad"
                    name="ciudad"
                    onChange={handleChange}
                    value={values.ciudad}
                    variant="outlined"
                  />
                </Grid>

                <Grid item md={12} xs={12}>
                  <TextField
                    fullWidth
                    required
                    size="small"
                    label="Direccion"
                    name="direccion"
                    onChange={handleChange}
                    value={values.direccion}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>

            <Divider />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 2,
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  md: "column",
                  lg: "row",
                },
              }}
            >
              <Button startIcon={<ArrowBackIosIcon />} href="/carrito">
                Volver al carrito
              </Button>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={handleClick}
              >
                continuar con envio
              </Button>
            </Box>
          </Card>
        </Grid>

        <Grid
          item
          md={5}
          lg={5}
          sx={{
            backgroundColor: "#fafafa",
            borderLeft: "1px solid #e0e0e0",
          }}
        >
          <ResumenCompra />
        </Grid>
      </Grid>
    </>
  );
}
