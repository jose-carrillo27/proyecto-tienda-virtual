import { Grid, Typography, Paper, Avatar } from "@mui/material";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = "/api/auth/compra/setCarritoCompra";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function ResumenCompra() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getCarritoCompra();
  }, []);

  const getCarritoCompra = async () => {
    const res = await axios.get(URL);
    setCart(JSON.parse(res.data));
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

  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: "center",
          paddingTop: { xs: 4, md: 10 },
          marginBottom: 5,
        }}
      >
        {nuevoArt.map((item) => (
          <Grid
            key={item.id}
            item
            xs={10}
            md={10}
            sx={{ marginLeft: { xs: 3, sm: 8 }, paddingRight: 5 }}
          >
            <Paper elevation={0} sx={{ backgroundColor: "#fafafa" }}>
              <Grid
                container
                spacing={2}
                sx={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 20px 10px 20px",
                }}
              >
                <Grid
                  xs={8}
                  md={8}
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: 2,
                  }}
                >
                  <Grid item sx={{ marginRight: 2 }}>
                    <StyledBadge badgeContent={item.cantidad} color="primary">
                      <Avatar
                        src={`/uploads/${item.image}`}
                        alt={item.nombre}
                        sx={{
                          width: 56,
                          height: 56,
                          border: "1px solid #e0e0e0",
                        }}
                        variant="rounded"
                      />
                    </StyledBadge>
                  </Grid>
                  <Grid item>
                    <Typography
                      gutterBottom
                      component="p"
                      sx={{
                        fontSize: 13,
                        color: "#000",
                        fontWeight: "bold",
                        maxWidth: 170,
                      }}
                    >
                      {item.nombre}
                    </Typography>
                  </Grid>
                </Grid>

                <Grid
                  xs={3}
                  md={3}
                  item
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    ${item.precio_venta * item.cantidad}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid item xs={6} md={6}>
          <Typography
            sx={{ fontSize: 13, textAlign: "center" }}
            color="textSecondary"
          >
            Subtotal
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography
            color="#000"
            sx={{ textAlign: "center", fontSize: 13, fontWeight: "bold" }}
          >
            $ {subtotal}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <Grid item xs={6} md={6}>
          <Typography
            sx={{ fontSize: 13, textAlign: "center" }}
            color="textSecondary"
          >
            Envio
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography
            color="#000"
            sx={{ textAlign: "center", fontSize: 13, fontWeight: "bold" }}
          >
            $ 16000
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 5,
          marginBottom: 4,
        }}
      >
        <Grid item xs={6} md={6}>
          <Typography
            sx={{ fontSize: 16, textAlign: "center" }}
            color="textPrimary"
          >
            Total
          </Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography
            color="#000"
            sx={{ textAlign: "center", fontSize: 20, fontWeight: "bold" }}
          >
            $ {subtotal + 16000}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
