import Head from "next/head";
import { Box, Container, Grid, Typography } from "@mui/material";
import { PerfilCuenta } from "@/components/cuenta/perfilCuenta";
import { PerfilDetalles } from "@/components/cuenta/perfilDetalles";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "@/components/futer_";
import NavBar from "@/components/NavBar";

export default function Cuneta({ entrada }) {
  const handleUpdate = async () => {
    const res = await axios.put();
  };

  return (
    <>
      <Head>
        <title>Cuenta</title>
      </Head>
      <NavBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography sx={{ mb: 3 }} variant="h4">
            Cueneta
          </Typography>
          <Grid container spacing={3}>
            <Grid item lg={4} md={6} xs={12}>
              <PerfilCuenta entrada={entrada.data[0]} />
            </Grid>
            <Grid item lg={8} md={6} xs={12}>
              <PerfilDetalles entrada={entrada.data[0]} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ query }) {
  const URL = `http://localhost:3000/api/auth/clients/showOneUser/${query.id}`;

  const respuesta = await fetch(URL);
  const entrada = await respuesta.json();

  console.log(entrada);

  return { props: { entrada } };
}
