import React from "react";
import Image from "next/image";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#fff", paddingBottom: 2 }}
    >
      <Toolbar>
        <Image src="/logo-2.jpg" alt="logo" width={300} height={150} />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none", lg: "flex" },
            justifyContent: "space-around",
          }}
        >
          <div>
            <Typography
              sx={{ fontSize: 25, color: "#081630", marginBottom: 2 }}
            >
              Mas informacin
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#081630" }}>
              <b>Direccion:</b> calle 15 No 15-124
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#081630" }}>
              <b>Telefono:</b> 1111-2222-3333
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#081630" }}>
              <b>E-mail:</b> mundo.eletronico@hotmail.com
            </Typography>
          </div>
          <div>
            <Typography
              sx={{ fontSize: 25, color: "#081630", marginBottom: 2 }}
            >
              Redes
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#081630" }}>
              <FacebookOutlinedIcon />
              <b>facebook:</b> mundo eltronica SA
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#081630" }}>
              <TwitterIcon />
              <b>twitter:</b> @mundoEltro
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#081630" }}>
              <InstagramIcon />
              <b>instagram:</b> @mundoEltro02
            </Typography>
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
