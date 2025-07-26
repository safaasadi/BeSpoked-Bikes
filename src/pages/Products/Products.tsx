import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../../components/LoadingPage/Loading";
import { productColumns } from "../../components/Columns/ProductColumns";
import "./Products.css";

const Products = () => {
  const {
    isPending,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetch(`/api/products`).then((res) => res.json()),
  });

  if (isPending) return <LoadingPage />;

  if (error) return <div>An error has occurred</div>;

  return (
    <Box className="product-box">
      <Typography variant="h5" mb={2}>
        Products
      </Typography>
      <DataGrid
        rows={products}
        columns={productColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        processRowUpdate={(updatedRow) => {
          fetch(`/api/products/${updatedRow.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedRow),
          });
          return updatedRow;
        }}
        getRowId={(row) => row.id}
        editMode="cell"
      />
    </Box>
  );
};

export default Products;
