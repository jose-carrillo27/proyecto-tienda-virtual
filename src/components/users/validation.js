import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import Snackbars from "../alert";
const URL = "/api/auth/users/registerUser";
const URL2 = "/api/auth/clients/show";

const currencies = [
  {
    value: "1",
    label: "admin",
  },
  {
    value: "2",
    label: "user",
  },
];

export default function Validation({ alto, getUsers }) {
  const [open, setOpen] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [estado, setEstado] = useState(false);
  const [values, setValues] = useState({
    nombre: undefined,
    apellido: undefined,
    CC: undefined,
    email: undefined,
    contraseña: undefined,
    id_rool: undefined,
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // !mejorar
  // realizar validaciones

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(URL, values);
    const { estado, message } = res.data;

    if (!estado) {
      setMensaje(message);
      setOpen(true);
    } else {
      setEstado(true);
      setMensaje(message);
      setOpen(true);

      setValues({
        nombre: "",
        apellido: "",
        CC: "",
        email: "",
        contraseña: "",
      });

      getUsers();
    }
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Snackbars
        handleClick={handleSubmit}
        handleClose={(event, reason) => handleClose(event, reason)}
        open={open}
        mensaje={mensaje}
        estado={estado}
      />
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={
          !alto
            ? { display: "none" }
            : {
                "& .MuiTextField-root": { m: 1, width: "28ch" },
                paddingLeft: "20px",
              }
        }
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={3}>
          <Grid item xl={3} lg={4} sm={6} xs={12}>
            <TextField
              required
              id="filled-required"
              label="Nombre"
              placeholder="nombre"
              variant="filled"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xl={3} lg={4} sm={6} xs={12}>
            <TextField
              required
              id="filled-disabled"
              label="Apellido"
              placeholder="apellido"
              variant="filled"
              value={values.apellido}
              onChange={handleChange}
              name="apellido"
            />
          </Grid>
          <Grid item xl={3} lg={4} sm={6} xs={12}>
            <TextField
              required
              id="filled-number"
              label="CC"
              placeholder="cc"
              type="number"
              variant="filled"
              name="CC"
              value={values.CC}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xl={3} lg={4} sm={6} xs={12}>
            <TextField
              required
              id="filled-required"
              label="Email"
              placeholder="email"
              variant="filled"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xl={3} lg={4} sm={6} xs={12}>
            <TextField
              required
              id="filled-select-currency"
              select
              label="Select"
              type="number"
              helperText="Please select a role"
              variant="filled"
              name="id_rool"
              onChange={handleChange}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xl={3} lg={4} sm={6} xs={12}>
            <TextField
              required
              id="filled-password-input"
              label="Password"
              type="password"
              placeholder="password"
              autoComplete="current-password"
              variant="filled"
              name="contraseña"
              value={values.contraseña}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xl={3} lg={4} sm={6} xs={12}>
            <Stack spacing={2} direction="row">
              <Button variant="outlined">Cancelar</Button>
              <Button
                variant="contained"
                type="submit"
                onClick={() => getUsers()}
              >
                Guardar
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
