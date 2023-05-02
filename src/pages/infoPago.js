import { Grid, Link, Typography, Box, Card, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import MigasPanEnvios from "@/components/products/migasPanEnvios";
import ResumenCompra from "@/components/products/resumenCompra";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";

const URL = "/api/auth/compra/setUserCompra";
const URL2 = "/api/auth/compra/eliminarCookieCart";
const URL3 = "/api/auth/compra/eliminarCookieUser";

export default function InfoPago() {
  const [value, setValue] = useState({});

  useEffect(() => {
    getUserCompra();
  }, []);

  const getUserCompra = async () => {
    const res = await axios.get(URL);
    setValue(JSON.parse(res.data));
  };

  const router = useRouter();

  const handleClick = async () => {
    await axios.get(URL2);
    await axios.get(URL3);
    router.push("/products_");
  };

  return (
    <>
      <Head>
        <title>Informacion Pago</title>
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
            <Grid container>
              <Grid item>
                <CheckCircleOutlineIcon
                  sx={{ color: "blue", marginRight: 1, fontSize: 45 }}
                />
              </Grid>
              <Grid item>
                <Typography sx={{ fontSize: 13 }}>Pedido #1</Typography>
                <Typography sx={{ fontSize: 19, marginBottom: 2 }}>
                  Gracias jose
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              sx={{
                border: "1px solid #e0e0e0",
                borderRadius: 1,
                paddingTop: 2,
                paddingBottom: 2,
                paddingLeft: 4,
                paddingRight: 4,
                marginBottom: 3,
              }}
            >
              <Grid item lg={12}>
                <Typography>Informacion del cliente</Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 14, marginBottom: 1 }}
                >
                  Informacion del Contacto
                </Typography>
                <Typography sx={{ fontSize: 13 }}>{value.email}</Typography>
              </Grid>
              <Grid item lg={6} sx={{ marginBottom: 1 }}>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 14, marginBottom: 1 }}
                >
                  Metodo de pago
                </Typography>
                <Typography sx={{ fontSize: 13 }}>
                  Pago en Davivienda - Bancolombia - NEQUI - DAVIPLATA -
                  Corresponsales - <strong>$ 17.900,00</strong>
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 14, marginBottom: 1 }}
                >
                  Direccion de envio
                </Typography>
                <Typography sx={{ fontSize: 13 }}>
                  {value.nombre} {value.apellido} <br />
                  {value.CC} <br />
                  {value.direccion}
                  <br />
                  {value.ciudad}
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: 14, marginBottom: 1 }}
                >
                  Metodo de envio
                </Typography>
                <Typography sx={{ fontSize: 13 }}>
                  Entrega de 1 ~ 3 dias habiles. (No Incluye Seguro de Envio).
                  Si deseas, Puedes agregar el Seguro de Envio del 2% a
                  continuacion.
                </Typography>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 2,
                marginTop: 7,
              }}
            >
              <Typography sx={{ fontSize: 14 }}>
                Necesitas ayuda?{" "}
                <Link href="/contactanos" underline="hover">
                  Ponte en contacto con nosotros
                </Link>
              </Typography>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={handleClick}
              >
                volver a la tienda
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
