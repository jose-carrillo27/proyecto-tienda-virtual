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
        <Grid item md={7} lg={7}>
          <Card
            sx={{
              paddingLeft: { xs: 2, md: 7 },
              paddingRight: { xs: 2, md: 7 },
              paddingTop: 5,
              paddingBottom: { sx: 5, md: 18 },
            }}
          >
            <MigasPanEnvios />
            <Divider />
            <Grid
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                padding: "15px 25px",
                marginBottom: 3,
              }}
            >
              <Grid
                container
                sx={{ marginBottom: 1, justifyContent: "space-between" }}
              >
                <Grid sx={{ display: "flex" }}>
                  <Typography
                    color="textSecondary"
                    sx={{ fontSize: { xs: 12, sm: 14 }, marginRight: 2 }}
                  >
                    Contacto
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 12, sm: 14 } }}>
                    {value.email}
                  </Typography>
                </Grid>
                <Grid>
                  <Link
                    underline="none"
                    color="primary"
                    href="/informacionCompra"
                    sx={{ fontSize: { xs: 11, sm: 13 } }}
                  >
                    Modificar
                  </Link>
                </Grid>
              </Grid>
              <Divider />
              <Grid
                container
                sx={{ marginTop: 1, justifyContent: "space-between" }}
              >
                <Grid sx={{ display: "flex" }}>
                  <Typography
                    color="textSecondary"
                    sx={{ fontSize: { xs: 12, sm: 14 }, marginRight: 3 }}
                  >
                    Enviar a
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 12, sm: 14 } }}>
                    {value.direccion}
                  </Typography>
                </Grid>
                <Grid>
                  <Link
                    underline="none"
                    color="primary"
                    href="/informacionCompra"
                    sx={{ fontSize: { xs: 11, sm: 13 } }}
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
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  md: "column",
                  lg: "row",
                },
              }}
            >
              <Button
                startIcon={<ArrowBackIosIcon />}
                href="/informacionCompra"
              >
                Volver
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
