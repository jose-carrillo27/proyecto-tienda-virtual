import {
  Box,
  Container,
  Grid,
  TextField,
  Stack,
  Button,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";

const currencies = [
  {
    value: "1",
    label: "Microcontroladores",
  },
  {
    value: "2",
    label: "Microprocesadores",
  },
  {
    value: "5",
    label: "Pilas",
  },
  {
    value: "6",
    label: "Memorias",
  },
  {
    value: "7",
    label: "Bobinas",
  },
  {
    value: "8",
    label: "Resistencias",
  },
  {
    value: "9",
    label: "Condensadores",
  },
  {
    value: "10",
    label: "Otros",
  },
];

const URL = "/api/auth/products/upload";

export default function FormProducts({ alto }) {
  const [nombre, setNombre] = useState();
  const [numero_ref, setNumero_ref] = useState();
  const [stock, setStock] = useState();
  const [costo, setCosto] = useState();
  const [precio_venta, setPrecio_venta] = useState();
  const [id_category, setId_category] = useState();
  const [image, setImage] = useState();
  const [data, setData] = useState();

  const handleData = (e) => {
    const formData = new FormData();

    // Array.from(e.target.files).forEach((file) => {
    //   formData.append(e.target.name, file);
    //   // setName(file.name);
    // });

    formData.append("nombre", nombre);
    formData.append("numero_ref", numero_ref);
    formData.append("stock", stock);
    formData.append("costo", costo);
    formData.append("precio_venta", precio_venta);
    formData.append("id_category", id_category);
    formData.append(e.target.name, e.target.files[0]);

    setData(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    };

    const res = await axios.post(URL, data, config);
    console.log(res.data);
    setNombre("");
    setNumero_ref("");
    setStock("");
    setCosto("");
    setPrecio_venta("");
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={
        !alto
          ? { display: "none" }
          : {
              "& .MuiTextField-root": { m: 1, width: "28ch" },
            }
      }
      noValidate
      autoComplete="off"
    >
      <Card>
        <CardContent>
          <Grid
            sx={{ flexGrow: 1 }}
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            container
            spacing={3}
          >
            <Grid item xl={3} lg={4} sm={6} xs={12}>
              <TextField
                required
                fullWidth
                id="filled-required"
                label="Nombre"
                placeholder="nombre"
                variant="filled"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Grid>
            <Grid item xl={3} lg={4} sm={6} xs={12}>
              <TextField
                required
                id="filled-required"
                label="numero de ref"
                placeholder="numero de ref"
                variant="filled"
                value={numero_ref}
                onChange={(e) => setNumero_ref(e.target.value)}
                name="numero_ref"
              />
            </Grid>
            <Grid item xl={3} lg={4} sm={6} xs={12}>
              <TextField
                required
                id="filled-number"
                label="stock"
                placeholder="stock"
                type="number"
                variant="filled"
                name="stock"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </Grid>
            <Grid item xl={3} lg={4} sm={6} xs={12}>
              <TextField
                required
                id="filled-number"
                label="costo"
                placeholder="costo"
                variant="filled"
                name="costo"
                type="number"
                value={costo}
                onChange={(e) => setCosto(e.target.value)}
              />
            </Grid>
            <Grid item xl={3} lg={4} sm={6} xs={12}>
              <TextField
                required
                id="filled-number"
                label="precio"
                placeholder="precio"
                variant="filled"
                name="precio_venta"
                type="number"
                value={precio_venta}
                onChange={(e) => setPrecio_venta(e.target.value)}
              />
            </Grid>
            <Grid item xl={3} lg={4} sm={6} xs={12}>
              <TextField
                required
                id="filled-select-currency"
                select
                label="Select"
                type="number"
                helperText="Please select a categoria"
                variant="filled"
                name="id_category"
                onChange={(e) => setId_category(e.target.value)}
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
                id="filled-file"
                type="file"
                placeholder="file"
                variant="filled"
                name="image"
                value={image}
                onChange={handleData}
              />
            </Grid>
            <Grid item xl={3} lg={4} sm={6} xs={12}>
              <Stack spacing={2} direction="row">
                <Button variant="outlined">Cancelar</Button>
                <Button
                  variant="contained"
                  type="submit"
                  // onClick={() => getUsers()}
                >
                  Guardar
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
