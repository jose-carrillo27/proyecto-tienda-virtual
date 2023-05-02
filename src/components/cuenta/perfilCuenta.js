import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

export const PerfilCuenta = ({ entrada }) => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Avatar
          src="/static/images/avatars/avatar_6.png"
          sx={{
            height: 64,
            mb: 2,
            width: 64,
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h5">
          {entrada.nombre}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {entrada.ciudad || entrada.departamento
            ? `${entrada.ciudad} ${entrada.departamento}`
            : ""}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {entrada.email}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions>
      <Button color="primary" fullWidth variant="text">
        Upload picture
      </Button>
    </CardActions>
  </Card>
);
