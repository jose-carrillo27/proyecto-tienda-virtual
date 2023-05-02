import Head from "next/head";
import { v4 as uuid } from "uuid";
import { Box, Container, Typography } from "@mui/material";
import { Seeker } from "@/components/users/seeker";
import Drawer from "@/components/dashboard/drawer";
import DataTable from "@/components/users/dataTable";
import axios from "axios";
import { useEffect, useState } from "react";
import Validation from "@/components/users/validation";
import { useRouter } from "next/router";
import {
  DataGrid,
  GridRowModes,
  GridValueSetterParams,
} from "@mui/x-data-grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";

const URL = "/api/auth/compra/setCompra";
const URL2 = "/api/auth/clients/isAuntenticate";
const URL3 = "/api/auth/clients/logout";
const URL4 = "/api/auth/compra/delete/";
const URL5 = "/api/auth/compra/update/";

export default function Ventas() {
  const [user, setUser] = useState("");
  const router = useRouter();

  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogin = async () => {
    const res = await axios.get(URL2);
    setUser(res.data.nombre);
  };

  const handleLogout = async () => {
    const res = await axios.get(URL3);
    router.push("/login");
  };

  const [registro, setRegistro] = useState([]);

  useEffect(() => {
    getVentas();
  }, []);

  const getVentas = async () => {
    const res = await axios.get(URL);
    console.log(res.data.registros);
    setRegistro(res.data.data);
  };

  const [mode, setMode] = useState({});
  const [comprador, setComprador] = useState();
  const [articulos, setArticulos] = useState();
  const [ganancia, setGanancia] = useState();

  const handleEditClick = (id) => {
    setMode({ ...mode, [id]: { mode: GridRowModes.Edit } });
    console.log(mode);
  };

  const handleDeleteClick = async (id) => {
    const res = await axios.delete(`${URL4}${id}`);
    console.log(res.data);
    getVentas();
  };

  const handleCancelClick = (id) => {
    setMode({ [id]: { mode: GridRowModes.View, ignoreModifications: true } });
  };

  const rows = registro.map((row) => {
    return {
      id: row.id,
      comprador: row.comprador,
      articulos: row.articulos,
      ganancia: row.ganancia,
      updatedAt: row.updatedAt,
    };
  });

  const setFullComprador = (params = GridValueSetterParams) => {
    const [firstName, lastName] = params.value.toString().split(" ");
    setComprador(params.value);
    return { ...params.row, firstName, lastName };
  };
  const setFullArticulos = (params = GridValueSetterParams) => {
    const [firstApellido, lastApellido] = params.value.toString().split(" ");
    setArticulos(params.value);
    return { ...params.row, firstApellido, lastApellido };
  };
  const setFullGanancia = (params = GridValueSetterParams) => {
    const [firstCC, lastCC] = params.value.toString().split(" ");
    setGanancia(params.value);
    return { ...params.row, firstCC, lastCC };
  };

  const handleSaveClick = async (id) => {
    if (comprador === "" || articulos === "" || ganancia === "") {
      return;
    } else {
      const res = await axios.put(`${URL5}${id}`, {
        comprador,
        articulos,
      });
    }
    setMode({ [id]: { mode: GridRowModes.View, ignoreModifications: true } });
    getVentas();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "comprador",
      headerName: "Comprador",
      width: 250,
      editable: true,
      valueSetter: setFullComprador,
    },
    {
      field: "articulos",
      headerName: "Articulos",
      width: 250,
      editable: true,
      valueSetter: setFullArticulos,
    },
    {
      field: "ganancia",
      headerName: "Ganancia",
      width: 250,
      editable: true,
      valueSetter: setFullGanancia,
    },
    {
      field: "updatedAt",
      headerName: "updatedAt",
      width: 150,
    },
    {
      field: "acciones",
      headerName: "Acciones",
      type: "actions",
      cellClassName: "actions",
      width: 150,
      getActions: ({ id }) => {
        const isInEditMode = mode[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <IconButton aria-label="delete" onClick={() => handleSaveClick(id)}>
              <SaveIcon />
            </IconButton>,
            <IconButton
              aria-label="delete"
              onClick={() => handleCancelClick(id)}
            >
              <CancelIcon />
            </IconButton>,
          ];
        }

        return [
          <IconButton aria-label="delete" onClick={() => handleEditClick(id)}>
            <EditIcon />
          </IconButton>,
          <IconButton aria-label="delete" onClick={() => handleDeleteClick(id)}>
            <DeleteIcon />
          </IconButton>,
        ];
      },
    },
  ];

  return (
    <>
      <Head>
        <title>Ventas</title>
      </Head>
      <Drawer user={user} handleLogout={handleLogout} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          paddingTop: 0,
        }}
      >
        <Container maxWidth={false}>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              marginLeft: "50px",
              paddingTop: 0,
            }}
          >
            <Box>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  m: -1,
                }}
              >
                <Typography sx={{ m: 1 }} variant="h4">
                  Ventas
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              marginLeft: "50px",
              paddingTop: 0,
            }}
          >
            <DataTable rows={rows} columns={columns} mode={mode} />
          </Box>
        </Container>
      </Box>
    </>
  );
}
