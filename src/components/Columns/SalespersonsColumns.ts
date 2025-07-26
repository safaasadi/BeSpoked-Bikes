import { GridColDef } from "@mui/x-data-grid";
import { format } from "date-fns/format";
import { enUS as locale } from "date-fns/locale/en-US";

export const salespersonsColumns: GridColDef[] = [
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
    width: 250,
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
  {
    field: "terminationDate",
    headerName: "Termination Date",
    width: 170,
    valueFormatter: (value) => {
      if (value) {
        return format(value, "MM/dd/yyyy", { locale });
      }
      return "";
    },
  },
  {
    field: "manager",
    headerName: "Manager",
    width: 150,
  },
];
