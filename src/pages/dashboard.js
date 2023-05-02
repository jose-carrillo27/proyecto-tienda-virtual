import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ActionAreaCard from "@/components/dashboard/ActionAreaCard.js";
import { Container, Grid, Box } from "@mui/material";
import Drawer from "@/components/dashboard/drawer";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Head from "next/head";

const URL = "/api/auth/clients/isAuntenticate";
const URL2 = "/api/auth/clients/logout";

export default function DashBoard() {
  const [user, setUser] = useState("");
  const router = useRouter();

  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogin = async () => {
    const res = await axios.get(URL);
    setUser(res.data.nombre);
  };

  const handleLogout = async () => {
    const res = await axios.get(URL2);
    router.push("/login");
  };

  const cards = [
    "Productos",
    "Ventas",
    "Compras",
    "Reportes",
    "Clientes",
    "Usuarios",
  ];

  return (
    <>
      <Head>
        <title>dashboard</title>
      </Head>
      <Drawer user={user} handleLogout={handleLogout} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: "50px" }}>
        <Container>
          <Grid container spacing={3}>
            {cards.map((card) => {
              let icon = null;
              let ruta = "";
              switch (card) {
                case "Productos":
                  ruta = "/products";
                  icon = {
                    ic: (
                      <InventoryIcon
                        sx={{
                          color: "Primary",
                          height: 56,
                          width: 56,
                          marginRight: "15px",
                        }}
                      />
                    ),
                    bad: "#b39ddb",
                    bad_2: "#ede7f6",
                  };
                  break;
                case "Ventas":
                  ruta = "/ventas";
                  icon = {
                    ic: (
                      <ShoppingCartIcon
                        sx={{
                          color: "Primary",
                          height: 56,
                          width: 56,
                          marginRight: "15px",
                        }}
                      />
                    ),
                    bad: "#29b6f6",
                    bad_2: "#e3f2fd",
                  };
                  break;
                case "Compras":
                  icon = {
                    ic: (
                      <LocalShippingIcon
                        sx={{
                          color: "Primary",
                          height: 56,
                          width: 56,
                          marginRight: "15px",
                        }}
                      />
                    ),
                    bad: "#1e88e5",
                    bad_2: "#bbdefb",
                  };
                  break;
                case "Reportes":
                  icon = {
                    ic: (
                      <QueryStatsIcon
                        sx={{
                          color: "Primary",
                          height: 56,
                          width: 56,
                          marginRight: "15px",
                        }}
                      />
                    ),
                    bad: "#7e57c2",
                    bad_2: "#d1c4e9",
                  };
                  break;
                case "Clientes":
                  ruta = "/customers";
                  icon = {
                    ic: (
                      <PersonIcon
                        sx={{
                          color: "Primary",
                          height: 56,
                          width: 56,
                          marginRight: "15px",
                        }}
                      />
                    ),
                    bad: "#3f51b5",
                    bad_2: "#c5cae9",
                  };
                  break;
                case "Usuarios":
                  ruta = "/users";
                  icon = {
                    ic: (
                      <PeopleAltIcon
                        sx={{
                          color: "Primary",
                          height: 56,
                          width: 56,
                          marginRight: "15px",
                        }}
                      />
                    ),
                    bad: "#009688",
                    bad_2: "#b2dfdb",
                  };
                  break;

                default:
                  break;
              }
              return (
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <ActionAreaCard titulo={card} icon={icon} ruta={ruta} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
