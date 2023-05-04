import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from "@mui/icons-material/Login";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

const pages = ["inicio", "productos", "contactanos"];
const settings = ["Inicio", "Compras", "Perfil", "Logout"];

const URL = "/api/auth/clients/logout";
const URL2 = "/api/auth/clients/login";

export default function NavBar() {
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

  const [entrada, setEntrada] = useState();

  const handleUser = async () => {
    const res = await axios.get(URL2);
    setEntrada(res.data);
  };

  //corregir

  const router = useRouter();
  const handleClick = async (key) => {
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
        const res = await axios.get(URL);
        setEntrada(null);
        router.push("/login");
      default:
        break;
    }
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#081630" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link className="navbar-brand" href="/">
            <Image src="/logo-2.jpg" alt="logo" width={65} height={38} />
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className="navbar-brand" href="/">
                  <Typography textAlign="center">Inicio</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className="navbar-brand" href="/contactanos">
                  <Typography textAlign="center">Contactanos</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link className="navbar-brand" href="/products_">
                  <Typography textAlign="center">Productos</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                color: "white",
                display: "block",
                fontWeight: "normal",
                fontSize: 14,
              }}
              href="/"
            >
              inicio
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                color: "white",
                display: "block",
                fontWeight: "normal",
                fontSize: 14,
              }}
              href="/contactanos"
            >
              contactanos
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                color: "white",
                display: "block",
                fontWeight: "normal",
                fontSize: 14,
              }}
              href="/products_"
            >
              productos
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
                        onClick={() => handleClick(setting)}
                      >
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Button
                variant="text"
                endIcon={<LoginIcon />}
                sx={{ color: "#fff", fontSize: 14, fontWeight: "normal" }}
                href="/login"
              >
                login
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
