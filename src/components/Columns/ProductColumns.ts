import { GridColDef } from "@mui/x-data-grid";

export const productColumns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "manufacturer", headerName: "Manufacturer", width: 200 },
  { field: "style", headerName: "Style", width: 120 },
  {
    field: "purchasePrice",
    headerName: "Purchase Price",
    type: "number",
    width: 150,
  },
  {
    field: "salePrice",
    headerName: "Sale Price",
    type: "number",
    width: 150,
  },
  {
    field: "qtyOnHand",
    headerName: "Qty On Hand",
    type: "number",
    width: 130,
  },
  {
    field: "commissionPercentage",
    headerName: "Commission (%)",
    type: "number",
    width: 150,
  },
];
