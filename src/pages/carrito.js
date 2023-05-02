import DrawerAppBar from "@/components/drawerAppBar";
import { Container, Grid, Typography, Button, Link } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArticulosCarrito from "@/components/products/articulosCarrito";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "@/components/futer_";
import Head from "next/head";

const URL = "/api/auth/compra/setCarritoCompra";
const URL2 = "/api/auth/compra/";

export default function Carrito() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCarritoCompra();
  }, []);

  const getCarritoCompra = async () => {
    const res = await axios.get(URL);
    console.log(res);
    if (res.data === "") {
      return;
    } else {
      setCart(JSON.parse(res.data));
    }
  };

  function agregarCantidad(cart) {
    const objetoAuxiliar = {};

    cart.forEach((objeto) => {
      if (objeto.id in objetoAuxiliar) {
        objetoAuxiliar[objeto.id].cantidad += 1;
      } else {
        objetoAuxiliar[objeto.id] = objeto;
        objetoAuxiliar[objeto.id].cantidad = 1;
      }
    });

    return Object.values(objetoAuxiliar);
  }

  const nuevoArt = agregarCantidad(cart);

  const subPre = nuevoArt.map((item) => item.precio_venta * item.cantidad);
  const subtotal = subPre.reduce((acc, crrvalue) => acc + crrvalue, 0);

  const handleClickCerrar = async (id) => {
    const res = await axios.delete(`${URL2}${id}`);
    location.reload();
  };

  return (
    <>
      <Head>
        <title>Carrito</title>
      </Head>
      <DrawerAppBar />
      <Container sx={{ marginTop: 20, marginBottom: 4 }}>
        <Grid
          container
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item>
            <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
              Tu carrito
            </Typography>
          </Grid>
          {nuevoArt.length == 0 ? (
            <Grid>
              <Button variant="text" href="/products_">
                seguir comprando
              </Button>
            </Grid>
          ) : (
            <Grid item sx={{ display: "flex" }}>
              <Grid>
                <Typography
                  sx={{ marginRight: 2 }}
                  variant="body1"
                  color="textSecondary"
                  component="p"
                >
                  Subtotal(impuestos incluidos)
                </Typography>
                <Typography
                  sx={{ marginRight: 2 }}
                  variant="h6"
                  component="h1"
                  color="#616161"
                >
                  ${subtotal}
                </Typography>
              </Grid>
              <Button
                size="large"
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                href="/informacionCompra"
              >
                comprar
              </Button>
            </Grid>
          )}
        </Grid>
      </Container>
      <Grid container sx={{ justifyContent: "center" }}>
        {nuevoArt.map((item) => (
          <Grid
            key={item.id}
            item
            xs={12}
            sm={6}
            md={3}
            lg={11}
            sx={{ marginBottom: 2 }}
          >
            <ArticulosCarrito
              item={item}
              handleClickCerrar={() => handleClickCerrar(item.id)}
            />
          </Grid>
        ))}
      </Grid>
      {nuevoArt.length !== 0 ? (
        <Container>
          <Grid container>
            <Grid
              item
              lg={11}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 1,
              }}
            >
              <Typography variant="h6" component="h2" color="#616161">
                Subtotal (Impuestos Incluidos)
              </Typography>
              <Typography variant="h6" component="h2" color="#616161">
                ${subtotal}
              </Typography>
            </Grid>
            <Grid item lg={11} sx={{ marginBottom: 2 }}>
              <Typography color="#616161">
                Gastos de envio calculados al momento del pago
              </Typography>
              <Link href="#" underline="none">
                {"Calcular gastos de envio"}
              </Link>
            </Grid>
            <Grid
              item
              lg={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid sx={{ marginRight: 3 }}>
                <Button
                  size="large"
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  href="/informacionCompra"
                >
                  comprar
                </Button>
              </Grid>
              <Grid>
                <Button
                  size="large"
                  variant="text"
                  startIcon={<ExitToAppIcon />}
                  href="/products_"
                >
                  seguir comprar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 200,
            border: "1px solid #e0e0e0",
            borderRadius: 1,
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 4,
            paddingRight: 4,
            marginBottom: 3,
          }}
        >
          <Typography>Tu carrito esta vacio</Typography>
          <Button
            size="large"
            variant="text"
            startIcon={<ExitToAppIcon />}
            href="/products_"
          >
            seguir comprar
          </Button>
        </Container>
      )}

      <Footer />
    </>
  );
}
