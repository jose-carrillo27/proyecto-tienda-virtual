import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  IconButton,
  Stack,
  CardContent,
  CardMedia,
} from "@mui/material";

import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import axios from "axios";

const URL4 = "/api/auth/compra/setCarritoCompra";

export default function Example({ products, setCarritoCompra }) {
  const longitudSlice = 4;
  const productSlice = [];

  for (let i = 0; i < products.length; i += longitudSlice) {
    let pedazo = products.slice(i, i + longitudSlice);
    productSlice.push(pedazo);
  }

  return (
    <Carousel>
      {productSlice.map((product, i) => (
        <Item key={i} product={product} setCarritoCompra={setCarritoCompra} />
      ))}
    </Carousel>
  );
}

function Item({ product, setCarritoCompra }) {
  return (
    <Grid
      container
      spacing={2}
      sx={{ paddingLeft: "60px", paddingRight: "60px" }}
    >
      {product.map((item) => (
        <Grid item key={product.id} xs={12} sm={6} md={3}>
          <Card>
            <CardActionArea href={`/product/${item.id}/${item.id_category}`}>
              <CardMedia
                component="img"
                alt={item.nombre}
                height="150"
                image={`/uploads/${item.image}`}
                title={item.nombre}
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
                  $ {item.precio_venta}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.nombre}
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
                  onClick={() => setCarritoCompra(item)}
                >
                  Agregar al carrito
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setCarritoCompra(item)}
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
  );
}
