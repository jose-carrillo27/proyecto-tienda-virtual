import {
  Grid,
  Link,
  Typography,
  Box,
  Card,
  Divider,
  Button,
} from "@mui/material";
import MigasPanEnvios from "@/components/products/migasPanEnvios";
import ResumenCompra from "@/components/products/resumenCompra";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import axios from "axios";
import Head from "next/head";

const URL = "/api/auth/compra/setUserCompra";

export default function Envios() {
  const [value, setValue] = useState({});

  useEffect(() => {
    getUserCompra();
  }, []);

  const getUserCompra = async () => {
    const res = await axios.get(URL);
    console.log(JSON.parse(res.data));
    setValue(JSON.parse(res.data));
  };

  return (
    <>
      <Head>
        <title>Envios</title>
      </Head>
      <Grid container>
        <Grid item lg={7}>
          <Card
            sx={{
              paddingLeft: 14,
              paddingRight: 7,
              paddingTop: 5,
              paddingBottom: 18,
            }}
          >
            <MigasPanEnvios />
            <Divider />
            <Grid
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 4,
                marginBottom: 3,
              }}
            >
              <Grid container sx={{ marginBottom: 1 }}>
                <Grid item xs={2} md={2}>
                  <Typography color="textSecondary" sx={{ fontSize: 14 }}>
                    Contacto
                  </Typography>
                </Grid>
                <Grid item sx={8} md={8}>
                  <Typography sx={{ fontSize: 14 }}>{value.email}</Typography>
                </Grid>
                <Grid item xs={2} md={2}>
                  <Link
                    underline="none"
                    color="primary"
                    href="/informacionCompra"
                    sx={{ fontSize: 13 }}
                  >
                    Modificar
                  </Link>
                </Grid>
              </Grid>
              <Divider />
              <Grid container sx={{ marginTop: 1 }}>
                <Grid item xs={2} md={2}>
                  <Typography color="textSecondary" sx={{ fontSize: 14 }}>
                    Enviar a
                  </Typography>
                </Grid>
                <Grid item xs={8} md={8}>
                  <Typography sx={{ fontSize: 14 }}>
                    {value.direccion}
                  </Typography>
                </Grid>
                <Grid item xs={2} md={2}>
                  <Link
                    underline="none"
                    color="primary"
                    href="/informacionCompra"
                    sx={{ fontSize: 13 }}
                  >
                    Modificar
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 19, marginBottom: 2 }}>
                Envio
              </Typography>
            </Grid>
            <Grid
              container
              sx={{
                marginBottom: 8,
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                paddingBottom: 2,
                paddingTop: 2,
                paddingLeft: 4,
              }}
            >
              <Grid item xs={9} md={9} sx={{ paddingRight: 2 }}>
                <Typography sx={{ fontSize: 14 }}>
                  Entrega de 1 ~ 3 dias habiles. (No Incluye Seguro de Envio).
                  Si deseas, Puedes agregar el Seguro de Envio del 2% a
                  continuacion.
                </Typography>
              </Grid>
              <Grid item xs={3} md={3}>
                <Typography sx={{ fontSize: 14 }}>COP </Typography>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 2,
              }}
            >
              <Button
                startIcon={<ArrowBackIosIcon />}
                href="/informacionCompra"
              >
                Volver a informacion
              </Button>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                href="/pago"
              >
                continuar con pago
              </Button>
            </Box>
          </Card>
        </Grid>

        <Grid
          item
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
