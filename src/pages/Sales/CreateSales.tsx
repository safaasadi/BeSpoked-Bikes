import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import { CreateSale } from "./SalesType";
import { Salesperson } from "../Salespersons/SalesPersonsType";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Product } from "../Products/ProductType";
import { Customer } from "../Customers/CustomerType";

const CreateSales = () => {
  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: () => fetch("/api/products").then((res) => res.json()),
  });
  const { data: salespersons = [] } = useQuery<Salesperson[]>({
    queryKey: ["salespersons"],
    queryFn: () => fetch("/api/salespersons").then((res) => res.json()),
  });
  const { data: customers = [] } = useQuery<Customer[]>({
    queryKey: ["customers"],
    queryFn: () => fetch("/api/customers").then((res) => res.json()),
  });

  const [productId, setProductId] = useState("");
  const [salesPersonId, setSalesPersonId] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const mutation = useMutation({
    mutationFn: (newSale: CreateSale) =>
      fetch("/api/sales", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newSale,
          date: new Date(newSale.date).toISOString(),
        }),
      }),
    onSuccess: () => {
      alert("Sale added successfully!");
      setProductId("");
      setSalesPersonId("");
      setCustomerId("");
      setDate(new Date().toISOString().slice(0, 10));
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (productId && salesPersonId && customerId && date) {
      mutation.mutate({
        productId: Number(productId),
        salesPersonId: Number(salesPersonId),
        customerId: Number(customerId),
        date,
      });
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <Box maxWidth={500} mx="auto" mt={4}>
      <Typography variant="h5" mb={2}>
        Add Sale
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <TextField
            select
            label="Product"
            fullWidth
            required
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          >
            {products.map((product) => (
              <MenuItem key={product.id} value={product.id}>
                {product.name}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Salesperson"
            fullWidth
            required
            value={salesPersonId}
            onChange={(e) => setSalesPersonId(e.target.value)}
          >
            {salespersons.map((s) => (
              <MenuItem key={s.id} value={s.id}>
                {s.firstName} {s.lastName}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Customer"
            fullWidth
            required
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
          >
            {customers.map((customer) => (
              <MenuItem key={customer.id} value={customer.id}>
                {customer.firstName} {customer.lastName}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            type="date"
            label="Sale Date"
            fullWidth
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Button
            variant="contained"
            type="submit"
            disabled={mutation.isPending}
          >
            Add Sale
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default CreateSales;
