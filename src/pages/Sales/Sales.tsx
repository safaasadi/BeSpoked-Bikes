import { useQuery } from "@tanstack/react-query";
import LoadingPage from "../../components/LoadingPage/Loading";
import { Box, Button, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { salesColumns } from "../../components/Columns/SalesColumns";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./Sales.css";
import { useState } from "react";

const Sales = () => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    null,
    null,
  ]);
  const {
    isPending,
    error,
    data: sales = [],
  } = useQuery({
    queryKey: ["sales"],
    queryFn: () => fetch(`/api/sales`).then((res) => res.json()),
  });

  const filteredSales = sales.filter((sale: any) => {
    const saleDate = new Date(sale.date);
    const [from, to] = dateRange;
    return (!from || saleDate >= from) && (!to || saleDate <= to);
  });

  if (isPending) return <LoadingPage />;

  if (error) return <div>An error has occurred</div>;
  console.log(sales);
  return (
    <Box className="sales-container">
      <Typography variant="h5" mb={2}>
        Sales
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack direction="row" spacing={2} mb={2}>
          <DateRangePicker
            value={dateRange}
            onChange={(newValue) => setDateRange(newValue)}
          />
          <Button onClick={() => setDateRange([null, null])} variant="outlined">
            Clear
          </Button>
        </Stack>
      </LocalizationProvider>
      <Box className="sales-box">
        <DataGrid
          rows={filteredSales}
          columns={salesColumns}
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
        />
      </Box>
    </Box>
  );
};

export default Sales;
