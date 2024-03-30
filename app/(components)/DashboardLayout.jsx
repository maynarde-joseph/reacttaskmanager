"use client";
import React, { useState } from "react";
import { StockStats } from "../(components)/StockStats";
import StockTable from "../(components)/StockTable";
import StockTicker from "../(components)/StockTicker";
import Temp2 from "./temp";
import NewsCard from "./NewsCard";
import { UserStats } from "./UserStats";

export const DashboardLayout = () => {
  const [selectedStock, setSelectedStock] = useState();

  return (
    <div className="flex flex-col h-screen ml-14">
      <Temp2 />
      <div className="flex flex-row p-4 pt-8 h-6/6">
        <div>
          <StockTable mainStock={setSelectedStock} />
          <UserStats />
        </div>
        <div className="w-7/12 py-3 pl-3 h-6/6">
          <StockTicker mainStock={selectedStock?.symbol || "AAPL"} />
        </div>
        <div className="w-3/12">
          <StockStats mainStock={selectedStock} />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};
