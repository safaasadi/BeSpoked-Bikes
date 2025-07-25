import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Salespersons from "./pages/Salespersons/Salespersons";
import Products from "./pages/Products/Products";
import Customers from "./pages/Customers/Customers";
import CreateSales from "./pages/Sales/CreateSales";
import CommissionReport from "./pages//CommissionReport/CommissionReport";
import "./App.css";
import Sales from "./pages/Sales/Sales";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/salespersons" element={<Salespersons />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/create-sale" element={<CreateSales />} />
            <Route path="/commission-report" element={<CommissionReport />} />
          </Routes>
        </Suspense>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
