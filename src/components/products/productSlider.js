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
        <Grid item key={product.id} xs={3} sm={3} md={3}>
          <Card>
            <CardActionArea href={`/product/${item.id}/${item.id_category}`}>
              <CardMedia
                component="img"
                alt={item.nombre}
                image={`/uploads/${item.image}`}
                title={item.nombre}
                sx={{ height: { sm: 100, md: 150 } }}
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
                  sx={{ color: "#2196f3", fontSize: { sm: 15, md: 20 } }}
                >
                  $ {item.precio_venta}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  sx={{ fontSize: { sm: 12, md: 15 } }}
                >
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
                  sx={{ fontSize: { sm: 9, md: 15 } }}
                >
                  Agregar
                </Button>
                <Button
                  variant="contained"
                  onClick={() => setCarritoCompra(item)}
                  href="/informacionCompra"
                  sx={{ fontSize: { sm: 9, md: 15 } }}
                >
                  comprar
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
