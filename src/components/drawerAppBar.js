import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import {
  TextField,
  InputAdornment,
  SvgIcon,
  ButtonGroup,
  Grid,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const URL = "/api/auth/products/getCategorias";
const URL2 = "/api/auth/clients/logout";
const URL3 = "/api/auth/clients/login";

const drawerWidth = 240;
const navItems = ["Home", "iniciar cesion"];
const settings = ["Inicio", "Compras", "Perfil", "Logout"];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function DrawerAppBar({ handleClick, cantidad }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  //para las categorias en el drawer de la vista de compras

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    getCategoria();
  }, []);

  const getCategoria = async () => {
    const res = await axios.get(URL);
    setCategorias(res.data.data);
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    handleUser();
  }, []);

  // para cambir los botones en caso de que el usuario inicie sesion

  const [entrada, setEntrada] = useState();

  const handleUser = async () => {
    const res = await axios.get(URL3);
    setEntrada(res.data);
  };

  //para redireccionar al usuario a la pagina que selecione
  const router = useRouter();
  const handleClickUser = async (key) => {
    switch (key) {
      case "Inicio":
        router.push("/");
        break;
      case "Compras":
        router.push("/products_");
        break;
      case "Perfil":
        router.push("/products_");
        break;
      case "Logout":
        const res = await axios.get(URL2);
        setEntrada(null);
        router.push("/login");
      default:
        break;
    }
  };

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#fff" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontSize: "12px",
              color: "#424242",
            }}
          >
            ENVÍO GRATIS POR COMPRAS DESDE $200.000
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {entrada ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => handleClickUser(setting)}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <ButtonGroup
                variant="text"
                aria-label="text button group"
                color="inherit"
              >
                <Button sx={{ color: "#424242" }} href="/">
                  Home
                </Button>
                <Button sx={{ color: "#424242" }} href="/login">
                  iniciar cesion
                </Button>
              </ButtonGroup>
            )}
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid
            container
            sx={{ alignItems: "center", justifyContent: "space-around" }}
          >
            <Grid item lg={11} sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block", lg: "inline" },
                  fontSize: "12px",
                  color: "#000",
                  textAlign: "right",
                  fontSize: "25px",
                  marginRight: "20px",
                }}
              >
                MUNDO ELECTRONICO
              </Typography>

              <TextField
                sx={{ minWidth: 500 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search customer"
                variant="outlined"
              />
            </Grid>
            <Grid item lg={1} sx={{ textAlign: "center" }}>
              <IconButton
                color="#424242"
                aria-label="add to shopping cart"
                href="/carrito"
              >
                <StyledBadge badgeContent={cantidad} color="primary">
                  <ShoppingCartIcon fontSize="large" />
                </StyledBadge>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              color="inherit"
            >
              {categorias.map((item) => (
                <Button
                  key={item.id}
                  sx={{ color: "#424242" }}
                  onClick={() => handleClick(item.id)}
                >
                  {item.nombre}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

// DrawerAppBar.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default DrawerAppBar;
