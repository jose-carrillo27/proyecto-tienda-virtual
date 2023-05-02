import { Grid, IconButton, Typography, Paper, TextField } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Image from "next/image";

export default function ArticulosCarrito({ item, handleClickCerrar }) {
  return (
    <Paper elevation={2}>
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
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px 10px 40px",
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
                fontWeight: "bold",
              }}
            >
              {item.nombre}
            </Typography>
            <Typography variant="body1" color="#616161" component="p">
              ${item.precio_venta}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ maxWidth: 100, marginRight: 8 }}
            id="outlined-number"
            label="Cantida"
            type="number"
            size="small"
            value={item.cantidad}
            // onChange={handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Typography variant="h6" component="h1">
            ${item.precio_venta * item.cantidad}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
