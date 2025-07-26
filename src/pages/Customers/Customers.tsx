import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../../components/LoadingPage/Loading";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { customerColumns } from "../../components/Columns/CustomersColumns";
import "./Customers.css";

const Customers = () => {
  const {
    isPending,
    error,
    data: customers,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: () => fetch(`/api/customers`).then((res) => res.json()),
  });

  if (isPending) return <LoadingPage />;

  if (error) return <div>An error has occurred</div>;

  return (
    <Box className="customer-box">
      <Typography variant="h5" mb={2}>
        Customers
      </Typography>
      <DataGrid
        rows={customers}
        columns={customerColumns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default Customers;
