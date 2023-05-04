import React from "react";
import {
  Grid,
  Box,
  Card,
  CardActionArea,
  CardActions,
  Button,
  Stack,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import axios from "axios";
import DrawerAppBar from "@/components/drawerAppBar";
import { useState, useEffect } from "react";
import BasicPagination from "@/components/paginacion";
import ModalCarritoCompra from "@/components/products/modalCarritoCompra";
import Footer from "@/components/futer_";
import { useRouter } from "next/router";
import Head from "next/head";

const URL = "/api/auth/products/paginacion/";
const URL2 = "/api/auth/products/selectCateg/";
const URL3 = "/api/auth/products/getProducts";
const URL4 = "/api/auth/compra/setCarritoCompra";

const ProductGallery = () => {
  const [products, setProducts] = useState([]);
  const [numPage, setNumPage] = useState();
  const [val, setVal] = useState(1);
  const [item, setItem] = useState({});
  const [activo, setActivo] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const res = await axios.get(URL3);
    setNumPage(Math.ceil(res.data.data.length / 12));
  };

  const router = useRouter();

  const handleClick = async (id) => {
    const res = await axios.get(`${URL2}${id}`);
    setNumPage(Math.ceil(res.data.data.length / 12));
    setProducts(res.data.data);
  };

  useEffect(() => {
    handlePageChange(val);
  }, []);

  const handlePageChange = async (value) => {
    const res = await axios.get(`${URL}${value}`);
    setProducts(res.data.data);
  };

  const getCarritoCompra = async () => {
    const res = await axios.get(URL4);
    setCarrito(JSON.parse(res.data));
    setCantidad(JSON.parse(res.data).length);
  };

  function agregarCantidad(carrito) {
    const objetoAuxiliar = {};

    carrito.forEach((objeto) => {
      if (objeto.id in objetoAuxiliar) {
        objetoAuxiliar[objeto.id].cantidad += 1;
      } else {
        objetoAuxiliar[objeto.id] = objeto;
        objetoAuxiliar[objeto.id].cantidad = 1;
      }
    });

    return Object.values(objetoAuxiliar);
  }

  const nuevoArt = agregarCantidad(carrito);
  const subPre = nuevoArt.map((item) => item.precio_venta * item.cantidad);
  const subtotal = subPre.reduce((acc, crrvalue) => acc + crrvalue, 0);

  const setCarritoCompra = async (product) => {
    let articulo = product;
    setItem(product);
    setActivo(true);

    const res = await axios.post(URL4, articulo);
    getCarritoCompra();
  };

  const handleClickCerrar = () => {
    setActivo(false);
  };

  return (
    <>
      <Head>
        <title>productos</title>
      </Head>
      <DrawerAppBar handleClick={(id) => handleClick(id)} cantidad={cantidad} />
      {activo ? (
        <ModalCarritoCompra
          item={item}
          handleClickCerrar={handleClickCerrar}
          subtotal={subtotal}
        />
      ) : (
        <Card sx={{ width: "100vph", marginTop: 11 }}>
          <CardMedia
            sx={{ minHeight: 190 }}
            image="/1171867.png"
            title="green iguana"
          />
        </Card>
      )}
      <Box sx={{ marginBottom: "30px" }}>
        <Grid container spacing={2} sx={{ padding: "60px" }}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardActionArea
                  href={`/product/${product.id}/${product.id_category}`}
                >
                  <CardMedia
                    component="img"
                    alt={product.nombre}
                    height="200"
                    image={`/uploads/${product.image}`}
                    title={product.nombre}
                  />
                  <CardContent
                    sx={{
                      height: "40px",
                      boxSizing: "content-box",
                      marginBottom: 5,
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      sx={{ color: "#2196f3" }}
                    >
                      $ {product.precio_venta}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {product.nombre}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions
                  sx={{
                    marginBottom: 1,
                  }}
                >
                  <Stack direction="column" spacing={2} sx={{ width: "100%" }}>
                    <Button
                      variant="outlined"
                      onClick={() => setCarritoCompra(product)}
                    >
                      Agregar al carrito
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => setCarritoCompra(product)}
                      href="/informacionCompra"
                    >
                      comprar ahora
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <BasicPagination
          numPage={numPage}
          handlePageChange={(value) => handlePageChange(value)}
        />
      </Box>
      <Footer />
    </>
  );
};

export default ProductGallery;
