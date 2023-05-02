import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows, mode, columns }) {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        pageSize={5}
        rowsPerPageOptions={[5]}
        rowModesModel={mode}
        checkboxSelection
        experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}
