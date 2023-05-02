import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Seeker = ({ andleClik, alto, titulo }) => {
  return (
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
          {titulo}
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button sx={{ mr: 1 }}>Import</Button>
          <Button sx={{ mr: 1 }}>Export</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => andleClik()}
          >
            Add Customers
          </Button>
        </Box>
      </Box>
      <Box sx={alto ? { display: "none" } : { display: "block", mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
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
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
