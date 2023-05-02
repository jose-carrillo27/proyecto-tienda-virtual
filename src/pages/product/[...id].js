import {
  Grid,
  Box,
  Card,
  CardActionArea,
  CardActions,
  Button,
  IconButton,
  MenuItem,
  TextField,
  Stack,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import DrawerAppBar from "@/components/drawerAppBar";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductSlider from "@/components/products/productSlider";
import { useRouter } from "next/router";
import Footer from "@/components/futer_";

const URL = "/api/auth/compra/setCarritoCompra";

export default function Product({ entrada, entrada2 }) {
  const [item, setItem] = useState({});
  const [cantidad, setCantidad] = useState(0);

  const getCarritoCompra = async () => {
    const res = await axios.get(URL);
    setCantidad(JSON.parse(res.data).length);
  };

  const setCarritoCompra = async (product) => {
    let articulo = product;
    setItem(product);
    const res = await axios.post(URL, articulo);
    getCarritoCompra();
  };

  const router = useRouter();

  const handleClick = () => {
    router.push("/products_");
  };

  return (
    <>
      <DrawerAppBar cantidad={cantidad} handleClick={handleClick} />
      <Box sx={{ marginBottom: "30px", marginTop: 5 }}>
        <Grid container spacing={2} sx={{ padding: "60px" }}>
          <Grid item xs={12} sm={6} md={3} lg={5}>
            <Card>
              <CardMedia
                component="img"
                alt={entrada.data[0].nombre}
                height="350"
                image={`/uploads/${entrada.data[0].image}`}
                title={entrada.data[0].nombre}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={4}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2">
                {entrada.data[0].nombre}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Por Mundo Electronico
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                sx={{ marginTop: 5 }}
              >
                {entrada.data[0].precio_venta}
              </Typography>
              <Typography>
                {entrada.data[0].descripcion
                  ? entrada.data[0].descripcion
                  : "La descripción es una herramienta discursiva que permite explicar las características de los sujetos, de los acontecimientos que tienen lugar, de los espacios físicos donde se desarrollan, incluso de las sensaciones que se tienen, tanto en situaciones reales o en textos de ficción. La descripción comprende todo aquello que el hombre puede caracterizar. Se trata de poner en palabras aquellas ideas que las personas se figuran en su mente por lo que les llega, fundamentalmente, a través de sus sentidos, y quieren manifestarlo por medio del lenguaje"}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Stack direction="column" spacing={1} sx={{ width: "100%" }}>
              <TextField
                required
                id="filled-number"
                label="Cantida"
                placeholder="Cantida"
                type="number"
                variant="filled"
                name="stock"
              />
              <Button
                variant="outlined"
                onClick={() => setCarritoCompra(entrada.data)}
              >
                Agregar al carrito
              </Button>
              <Button variant="contained">comprar ahora</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          sx={{ paddingLeft: "60px", marginBottom: "20px" }}
        >
          Productos relacionados
        </Typography>
        <ProductSlider
          products={entrada2.data}
          setCarritoCompra={(item) => setCarritoCompra(item)}
        />
      </Box>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const url = `http://localhost:3000/api/auth/products/getOneProduct/${query.id}`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();

  const respuesta2 = await fetch(
    `http://localhost:3000/api/auth/products/selectCateg/${query.id[1]}`
  );

  const entrada2 = await respuesta2.json();

  return { props: { entrada, entrada2 } };
}
