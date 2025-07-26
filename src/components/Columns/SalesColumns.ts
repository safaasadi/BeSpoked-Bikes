import { format } from "date-fns/format";
import { enUS as locale } from "date-fns/locale/en-US";
import { GridColDef } from "@mui/x-data-grid";
import { Sale } from "../../pages/Sales/SalesType";

export const salesColumns: GridColDef<Sale>[] = [
  {
    field: "product",
    headerName: "Product",
    width: 200,
    valueGetter: (value, row) => row.product.name || "—",
  },
  {
    field: "customer",
    headerName: "Customer",
    width: 200,
    valueGetter: (value, row) =>
      `${row.customer?.firstName ?? ""} ${row.customer?.lastName ?? ""}`,
  },
  {
    field: "salesperson",
    headerName: "Salesperson",
    width: 200,
    valueGetter: (value, row) =>
      `${row.salesPerson?.firstName ?? ""} ${row.salesPerson?.lastName ?? ""}`,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    valueFormatter: (value) => {
      if (value) {
        return format(value, "MM/dd/yyyy", { locale });
      }
      return "";
    },
  },
  {
    field: "price",
    headerName: "Price ($)",
    width: 130,
    valueGetter: (value, row) => row.product?.salePrice ?? 0,
    valueFormatter: (value) => `$${Number(value).toFixed(2)}`,
  },
  {
    field: "commission",
    headerName: "Commission (%)",
    width: 150,
    valueGetter: (value, row) => {
      const { salePrice = 0, commissionPercentage = 0 } = row.product ?? {};
      return (salePrice * commissionPercentage) / 100;
    },
    valueFormatter: (value) => `${Number(value).toFixed(2)}%`,
  },
];
