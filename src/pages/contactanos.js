import * as React from "react";
import NavBar from "@/components/NavBar";
import { TextField, Box, Grid, Typography } from "@mui/material";
import Footer from "@/components/futer_";
import Head from "next/head";

export default function Contactanos() {
  return (
    <>
      <Head>
        <title>Contactanos</title>
      </Head>
      <NavBar />
      <Box sx={{ marginTop: 13, marginBottom: "40px" }}>
        <Typography
          sx={{ textAlign: "center" }}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Contactanos
        </Typography>
        <Typography
          sx={{ textAlign: "center" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Por favor, completa el formulario y nos pondremos en contacto contigo
          lo más pronto posible
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1 },
          padding: "10px",
        }}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <TextField
              id="outlined-multiline-flexible"
              label="nombre"
              placeholder="Nombre"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3} lg={3}>
            <TextField
              id="outlined-textarea"
              label="numero de contacto"
              placeholder="Numero de contacto"
              type="number"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <TextField
              required
              id="outlined-multiline-flexible"
              label="email"
              placeholder="Email"
              type="email"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <TextField
              id="outlined-multiline-static"
              label="Mensaje"
              multiline
              rows={6}
              placeholder="Deja un mensaje"
              fullWidth
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
