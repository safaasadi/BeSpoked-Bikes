import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../../components/LoadingPage/Loading";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { salespersonsColumns } from "../../components/Columns/SalespersonsColumns";
import "./Salespersons.css";

const Salespersons = () => {
  const {
    isPending,
    error,
    data: salespersons,
  } = useQuery({
    queryKey: ["salespersons"],
    queryFn: () => fetch(`/api/salespersons`).then((res) => res.json()),
  });

  if (isPending) return <LoadingPage />;

  if (error) return <div>An error has occurred</div>;

  return (
    <Box className="salespersons-box">
      <Typography variant="h5" mb={2}>
        Salespersons
      </Typography>
      <DataGrid
        rows={salespersons}
        columns={salespersonsColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        getRowId={(row) => row.id}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        processRowUpdate={(updatedRow) => {
          fetch(`/api/salespersons/${updatedRow.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedRow),
          });
          return updatedRow;
        }}
        editMode="cell"
      />
    </Box>
  );
};

export default Salespersons;
