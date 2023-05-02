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

const URL = "/api/auth/clients/showCustomers";
const URL2 = "/api/auth/clients/isAuntenticate";
const URL3 = "/api/auth/clients/logout";
const URL4 = "/api/auth/clients/delete/";
const URL5 = "/api/auth/clients/update/";

export default function Customers() {
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
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(URL);
    setRegistro(res.data.registros);
  };

  const [alto, setAlto] = useState(false);

  const andleClik = () => {
    if (!alto) {
      setAlto(true);
    } else {
      setAlto(false);
    }
    return alto;
  };

  const [mode, setMode] = useState({});
  const [nombre, setNombre] = useState();
  const [apellido, setApellido] = useState();
  const [CC, setCC] = useState();
  const [email, setEmail] = useState();

  const handleEditClick = (id) => {
    setMode({ ...mode, [id]: { mode: GridRowModes.Edit } });
    console.log(mode);
  };

  const handleDeleteClick = async (id) => {
    const res = await axios.delete(`${URL4}${id}`);
    console.log(res.data);
    getUsers();
  };

  const handleCancelClick = (id) => {
    setMode({ [id]: { mode: GridRowModes.View, ignoreModifications: true } });
  };

  const rows = registro.map((row) => {
    return {
      id: row.id,
      nombre: row.nombre,
      apellido: row.apellido,
      cc: row.CC,
      email: row.email,
      contraseña: row.contraseña,
      updatedAt: row.updatedAt,
    };
  });

  const setFullName = (params = GridValueSetterParams) => {
    const [firstName, lastName] = params.value.toString().split(" ");
    setNombre(params.value);
    return { ...params.row, firstName, lastName };
  };
  const setFullApellido = (params = GridValueSetterParams) => {
    const [firstApellido, lastApellido] = params.value.toString().split(" ");
    setApellido(params.value);
    return { ...params.row, firstApellido, lastApellido };
  };
  const setFullCC = (params = GridValueSetterParams) => {
    const [firstCC, lastCC] = params.value.toString().split(" ");
    setCC(params.value);
    return { ...params.row, firstCC, lastCC };
  };
  const setFullEmail = (params = GridValueSetterParams) => {
    const [firstEmail, lastEmail] = params.value.toString().split(" ");
    setEmail(params.value);
    return { ...params.row, firstEmail, lastEmail };
  };

  const handleSaveClick = async (id) => {
    if (nombre === "" || apellido === "" || CC === "" || email === "") {
      return;
    } else {
      const res = await axios.put(`${URL5}${id}`, {
        nombre,
        apellido,
        CC,
        email,
      });
    }
    setMode({ [id]: { mode: GridRowModes.View, ignoreModifications: true } });
    getUsers();
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "nombre",
      headerName: "Nombre",
      width: 130,
      editable: true,
      valueSetter: setFullName,
    },
    {
      field: "apellido",
      headerName: "Apellido",
      width: 130,
      editable: true,
      valueSetter: setFullApellido,
    },
    {
      field: "cc",
      headerName: "CC",
      width: 120,
      editable: true,
      valueSetter: setFullCC,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: true,
      valueSetter: setFullEmail,
    },
    {
      field: "contraseña",
      headerName: "Contraseña",
      width: 230,
    },
    {
      field: "updatedAt",
      headerName: "updatedAt",
      width: 100,
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
        <title>Clientes</title>
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
                  Clientes
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
