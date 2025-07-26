import { GridColDef } from "@mui/x-data-grid";
import { enUS as locale } from "date-fns/locale";
import { format } from "date-fns/format";

export const customerColumns: GridColDef[] = [
  {
    field: "firstName",
    headerName: "First Name",
    width: 150,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 150,
  },
  {
    field: "address",
    headerName: "Address",
    width: 400,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 150,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 150,
    valueFormatter: (value) => {
      if (value) {
        return format(value, "MM/dd/yyyy", { locale });
      }
      return "";
    },
  },
];
