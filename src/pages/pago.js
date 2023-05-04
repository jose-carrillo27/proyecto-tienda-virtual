import {
  Grid,
  FormControlLabel,
  Radio,
  Link,
  Typography,
  Box,
  Card,
  Divider,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  RadioGroup,
} from "@mui/material";
import Image from "next/image";
import MigasPanEnvios from "@/components/products/migasPanEnvios";
import ResumenCompra from "@/components/products/resumenCompra";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";

const URL = "/api/auth/compra/setUserCompra";
const URL2 = "/api/auth/compra/setCompra";
const URL3 = "/api/auth/compra/setCarritoCompra";

export default function Pago() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [value, setValue] = useState({});

  useEffect(() => {
    getUserCompra();
  }, []);

  const getUserCompra = async () => {
    const res = await axios.get(URL);
    setValue(JSON.parse(res.data));
  };

  const [articulos, setArticulos] = useState([]);

  useEffect(() => {
    getCarritoCompra();
  }, []);

  const getCarritoCompra = async () => {
    const res = await axios.get(URL3);
    setArticulos(JSON.parse(res.data));
  };

  function agregarCantidad(articulo) {
    const objetoAuxiliar = {};

    articulo.forEach((objeto) => {
      if (objeto.id in objetoAuxiliar) {
        objetoAuxiliar[objeto.id].cantidad += 1;
      } else {
        objetoAuxiliar[objeto.id] = objeto;
        objetoAuxiliar[objeto.id].cantidad = 1;
      }
    });

    return Object.values(objetoAuxiliar);
  }

  const nuevoArt = agregarCantidad(articulos);

  const subCosto = nuevoArt.map((item) => item.costo * item.cantidad);
  const subPreV = nuevoArt.map((item) => item.precio_venta * item.cantidad);
  const subtotalPreV = subPreV.reduce((acc, crrvalue) => acc + crrvalue, 0);
  const subtotalCosto = subCosto.reduce((acc, crrvalue) => acc + crrvalue, 0);

  const router = useRouter();

  const handleClick = async () => {
    const compra = {
      comprador: value.email,
      articulos: articulos,
      ganancia: subtotalPreV - subtotalCosto,
    };

    const res = await axios.post(URL2, compra);
    router.push("/infoPago");
  };

  return (
    <>
      <Head>
        <title>Pagos</title>
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
                sx={{ marginBottom: 2, justifyContent: "space-between" }}
              >
                <Grid item sx={{ display: "flex" }}>
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
                <Grid item>
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
                sx={{ marginBottom: 2, justifyContent: "space-between" }}
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
                <Grid item>
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
                sx={{ marginBottom: 1, justifyContent: "space-between" }}
              >
                <Grid item sx={{ display: "flex" }}>
                  <Typography
                    color="textSecondary"
                    sx={{ fontSize: { xs: 12, sm: 14 }, marginRight: 3 }}
                  >
                    Metodo
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 12, sm: 14 } }}>
                    Entrega de 1 ~ 3 dias habiles. (No Incluye Seguro de Envio).
                    Si deseas, Puedes agregar el Seguro de Envio del 2% a
                    continuacion.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography sx={{ fontSize: 19, marginBottom: 2 }}>
                Pago
              </Typography>
            </Grid>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="payu"
                name="radio-buttons-group"
              >
                <Accordion
                  expanded={expanded === "panel1"}
                  onChange={handleChange("panel1")}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Grid sx={{ display: "flex", alignItems: "center" }}>
                      <FormControlLabel value="payu" control={<Radio />} />
                      <Image
                        src="/PayU.svg.png"
                        alt="logo-Payu"
                        width={48}
                        height={24}
                      />
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontSize: 13,
                        textAlign: "center",
                        paddingLeft: "10%",
                        paddingRight: "10%",
                      }}
                    >
                      Luego de hacer clic en “Finalizar Pedido y Ver Métodos de
                      Pago”, serás redirigido a PayU Latam para completar tu
                      compra de forma segura. (Tarjetas de Credito, Debito, PSE,
                      Efecty, ...)
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion
                  expanded={expanded === "panel2"}
                  onChange={handleChange("panel2")}
                >
                  <AccordionSummary
                    aria-controls="panel2d-content"
                    id="panel2d-header"
                  >
                    <Grid sx={{ display: "flex", alignItems: "center" }}>
                      <FormControlLabel value="sucursal" control={<Radio />} />
                      <Typography sx={{ fontWeight: "bold", fontSize: 15 }}>
                        Pago en Davivienda - Bancolombia - NEQUI - DAVIPLATA -
                        Corresponsales
                      </Typography>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        fontSize: 13,
                        textAlign: "center",
                        paddingLeft: "10%",
                        paddingRight: "10%",
                      }}
                    >
                      Luego de hacer clic en “Finalizar Pedido y Ver Métodos de
                      Pago” veras todos los datos y opciones para realizar el
                      respectivo Pago de la Orden de Compra.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </RadioGroup>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 2,
                marginTop: 7,
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  md: "column",
                  lg: "row",
                },
              }}
            >
              <Button startIcon={<ArrowBackIosIcon />} href="/envios">
                Volver a envio
              </Button>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                onClick={handleClick}
              >
                finalizar compra
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
