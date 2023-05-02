import Head from "next/head";
import {
  Box,
  Container,
  Grid,
  TextField,
  Stack,
  Button,
  MenuItem,
} from "@mui/material";
import { Seeker } from "@/components/users/seeker";
import Drawer from "@/components/dashboard/drawer";
import DataTable from "@/components/users/dataTable";
import FormProducts from "@/components/products/formProducts";
import axios from "axios";
import { useEffect, useState } from "react";
import Validation from "@/components/users/validation";
import { useRouter } from "next/router";

const URL2 = "/api/auth/clients/isAuntenticate";
const URL3 = "/api/auth/clients/logout";

export default function Products() {
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

  const [alto, setAlto] = useState(false);

  const andleClik = () => {
    if (!alto) {
      setAlto(true);
    } else {
      setAlto(false);
    }
    return alto;
  };
  return (
    <>
      <Head>
        <title>Productos</title>
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
            <Seeker
              andleClik={() => andleClik()}
              alto={alto}
              titulo="Productos"
            />
            <FormProducts alto={alto} />
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
            {/* <DataTable rows={rows} columns={columns} mode={mode} /> */}
          </Box>
        </Container>
      </Box>
    </>
  );
}
