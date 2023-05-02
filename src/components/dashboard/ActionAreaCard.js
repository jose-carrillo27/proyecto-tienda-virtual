import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "next/link";
import { Grid } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "../../styles/Link.module.css";

export default function ActionAreaCard({ titulo, icon, ruta }) {
  return (
    <Link href={ruta} className={styles.link}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent
            sx={{
              paddingRight: "0",
              paddingBottom: "0",
              paddingLeft: 0,
              background: icon.bad_2,
            }}
          >
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                marginBottom: "40px",
              }}
              spacing={3}
            >
              <Grid item sx={{ marginTop: "15px", marginLeft: 2 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {titulo}
                </Typography>
              </Grid>
              <Grid item>{icon.ic}</Grid>
            </Grid>
            <Grid
              container
              sx={{
                justifyContent: "space-between",
                background: icon.bad,
                display: "flex",
                alignItems: "center",
                height: "40px",
              }}
            >
              <Grid item sx={{ marginLeft: 4 }}>
                <Typography variant="body2" color="#fff">
                  Ver mas
                </Typography>
              </Grid>
              <Grid item>
                <ArrowForwardIosIcon
                  sx={{ marginRight: "27px", color: "#fff" }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
