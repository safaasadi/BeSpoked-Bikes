import { useQuery } from "@tanstack/react-query";
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Sale } from "../Sales/SalesType";

const QuarterlyReport = () => {
  const {
    data: sales = [],
    isLoading,
    error,
  } = useQuery<Sale[]>({
    queryKey: ["Sales"],
    queryFn: () => fetch("/api/Sales").then((res) => res.json()),
  });

  const commissions: {
    id: number;
    name: string;
    totalCommission: number;
    salesCount: number;
  }[] = [];

  sales.forEach((sale) => {
    const commissionAmount =
      sale.product.salePrice * (sale.product.commissionPercentage / 100);
    const salespersonId = sale.salesPerson.id;
    const existing = commissions.find(
      (commission) => commission.id === salespersonId,
    );

    if (existing) {
      existing.totalCommission += commissionAmount;
      existing.salesCount += 1;
    } else {
      commissions.push({
        id: salespersonId,
        name: `${sale.salesPerson.firstName} ${sale.salesPerson.lastName}`,
        totalCommission: commissionAmount,
        salesCount: 1,
      });
    }
  });

  if (isLoading)
    return (
      <Box mt={4} textAlign="center">
        <CircularProgress />
      </Box>
    );
  if (error) return <Typography>Error loading data</Typography>;
  const topCommission = Math.max(...commissions.map((c) => c.totalCommission));
  return (
    <Container maxWidth="md">
      <Box mt={4} mb={3}>
        <Typography variant="h5">Salesperson Commission Report</Typography>
      </Box>

      <Grid container spacing={3}>
        {commissions.map((entry) => {
          const isTop = entry.totalCommission === topCommission;

          return (
            <Grid key={entry.id}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  backgroundColor: isTop ? "#e0f2f1" : "white",
                  border: isTop ? "2px solid #4caf50" : "1px solid #ccc",
                }}
              >
                <Typography variant="h6">{entry.name}</Typography>
                <Typography variant="body2">
                  Sales: {entry.salesCount}
                </Typography>
                <Typography variant="body2">
                  Commission: ${entry.totalCommission.toFixed(2)}
                </Typography>
              </Paper>
            </Grid>
          );
        })}

        {commissions.length === 0 && (
          <Grid>
            <Typography align="center">No sales found.</Typography>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default QuarterlyReport;
