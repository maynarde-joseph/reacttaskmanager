"use client";
import React, { useState } from "react";
import { StockStats } from "../(components)/StockStats";
import StockTable from "../(components)/StockTable";
import StockTicker from "../(components)/StockTicker";

export const DashboardLayout = () => {
  const [selectedStock, setSelectedStock] = useState("AAPL");

  return (
    <div className="flex flex-col h-screen">
      <div className="h-1/6">
        <StockStats mainStock={selectedStock} />
      </div>
      <div className="flex-grow flex flex-row h-5/6">
        <div className="overflow-y-scroll flex-grow">
          <StockTable mainStock={setSelectedStock} />
        </div>
        <StockTicker mainStock={selectedStock} />
      </div>
    </div>
  );
};
