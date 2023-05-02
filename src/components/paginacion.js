import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination({ numPage, handlePageChange }) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={numPage}
        sx={{ marginLeft: "auto", marginRight: "auto" }}
        onChange={(event, value) => handlePageChange(value)}
      />
    </Stack>
  );
}
