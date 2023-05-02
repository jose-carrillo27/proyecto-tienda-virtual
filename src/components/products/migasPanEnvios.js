import { CardHeader, Breadcrumbs, Link } from "@mui/material";

export default function MigasPanEnvios() {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const breadcrumbs = [
    <Link
      underline="none"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
      sx={{ fontSize: 12 }}
    >
      Carrito
    </Link>,
    <Link
      underline="none"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
      sx={{ fontSize: 12 }}
    >
      Informacion
    </Link>,
    <Link key="3" color="inherit" underline="none" sx={{ fontSize: 12 }}>
      Envios
    </Link>,
    <Link key="4" color="inherit" underline="none" sx={{ fontSize: 12 }}>
      Pago
    </Link>,
  ];

  return (
    <CardHeader
      subheader={
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
      }
      title="Mundo Electronico"
    />
  );
}
