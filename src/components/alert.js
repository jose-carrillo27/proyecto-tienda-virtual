import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snackbars({ handleClose, open, mensaje, estado }) {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={(event, reason) => handleClose(event, reason)}
      >
        <Alert
          onClose={handleClose}
          severity={estado ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {!mensaje ? "Campo requerido" : mensaje}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
