import { Grid, Button, IconButton, Typography, Paper } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Image from "next/image";

export default function ModalCarritoCompra({
  item,
  handleClickCerrar,
  subtotal,
}) {
  return (
    <Paper sx={{ position: "sticky", top: 190, zIndex: 10 }}>
      <IconButton
        aria-label="delete"
        sx={{ display: "block", float: "right" }}
        onClick={handleClickCerrar}
      >
        <ClearIcon />
      </IconButton>
      <Grid
        container
        spacing={2}
        sx={{
          paddingBottom: 4,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          item
          sx={{ display: "flex", alignItems: "center", marginRight: 2 }}
        >
          <Grid item sx={{ marginRight: 2 }}>
            <Image
              src={`/uploads/${item.image}`}
              alt={item.nombre}
              width={474 / 3.5}
              height={300 / 3.5}
            />
          </Grid>
          <Grid item>
            <Typography
              gutterBottom
              component="p"
              sx={{
                fontSize: 16,
                color: "#000",
                maxWidth: 200,
                fontWeight: "bold",
              }}
            >
              {item.nombre}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
              $ {item.precio_venta}
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Grid item sx={{ marginBottom: 2 }}>
            <Typography
              color="textSecondary"
              component="p"
              sx={{ fontWeight: "bold", fontSize: 20 }}
            >
              Subtotal (impuestos incluidos)
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}> $ {subtotal}</Typography>
          </Grid>
          <Grid item>
            <Button variant="outlined" sx={{ marginRight: 1 }} href="/carrito">
              Ver carrito
            </Button>
            <Button variant="contained">Finalizar compra</Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
