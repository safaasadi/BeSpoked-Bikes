import { GridColDef } from "@mui/x-data-grid";

export const productColumns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200, editable: true },
  {
    field: "manufacturer",
    headerName: "Manufacturer",
    width: 200,
    editable: true,
  },
  { field: "style", headerName: "Style", width: 120, editable: true },
  {
    field: "purchasePrice",
    headerName: "Purchase Price",
    type: "number",
    width: 150,
    valueFormatter: (value) => `$${Number(value).toFixed(2)}`,
    editable: true,
  },
  {
    field: "salePrice",
    headerName: "Sale Price",
    type: "number",
    width: 150,
    valueFormatter: (value) => `$${Number(value).toFixed(2)}`,
    editable: true,
  },
  {
    field: "qtyOnHand",
    headerName: "Qty On Hand",
    type: "number",
    width: 130,
    editable: true,
  },
  {
    field: "commissionPercentage",
    headerName: "Commission (%)",
    type: "number",
    width: 150,
    editable: true,
    valueGetter: (value, row) => {
      const { salePrice = 0, commissionPercentage = 0 } = row ?? {};
      return (salePrice * commissionPercentage) / 100;
    },
    valueFormatter: (value) => `${Number(value).toFixed(2)}%`,
  },
];
