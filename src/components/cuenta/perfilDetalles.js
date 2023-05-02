import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@mui/material";
import axios from "axios";

const URL = "/api/auth/clients/update/";

export const PerfilDetalles = ({ entrada }) => {
  const [values, setValues] = useState({
    nombre: entrada.nombre,
    apellido: entrada.apellido,
    email: entrada.email,
    celular: entrada.celular,
    departamento: entrada.departamento,
    ciudad: entrada.ciudad,
    CC: entrada.CC,
    direccion: entrada.direccion,
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  // para actualizar los datos del cliente

  // !mejorar
  // realizar validaciones

  const handleUpdate = async (e) => {
    e.preventDefault();
    const res = await axios.put(`${URL}${entrada.id}`, values);
    console.log(res.data);
  };

  return (
    <form autoComplete="off" onSubmit={handleUpdate}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Nombre"
                name="nombre"
                onChange={handleChange}
                required
                value={values.nombre.toString()}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Apellido"
                name="apellido"
                onChange={handleChange}
                required
                value={values.apellido.toString()}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email.toString()}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Celular"
                name="celular"
                onChange={handleChange}
                type="number"
                value={values.celular}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Departamento"
                name="departamento"
                onChange={handleChange}
                value={
                  values.departamento ? values.departamento.toString() : ""
                }
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Ciudad"
                name="ciudad"
                onChange={handleChange}
                value={values.ciudad ? values.ciudad.toString() : ""}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="CC"
                name="CC"
                onChange={handleChange}
                type="number"
                value={values.CC}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Direccion"
                name="direccion"
                onChange={handleChange}
                value={values.direccion ? values.direccion.toString() : ""}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardHeader subheader="Update password" title="Password" />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirm password"
            margin="normal"
            name="confirm"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
        </CardContent>
        <Divider />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained" type="submit">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};
