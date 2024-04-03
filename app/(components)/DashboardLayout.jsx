"use client";
import React, { useState } from "react";
import { StockStats } from "../(components)/StockStats";
import StockTable from "../(components)/StockTable";
import StockTicker from "../(components)/StockTicker";
import { TradePopup } from "./TradePopup";
import HeaderBar from "./HeaderBar";
import AchievementPopup from "./AchievementPopup";
import { CompanyDetails } from "./CompanyDetails";

export const DashboardLayout = () => {
  const [selectedStock, setSelectedStock] = useState();

  return (
    <div className="flex flex-col h-screen">
      <AchievementPopup />
      <HeaderBar pageName="Dashboard" />
      <div className="flex flex-row p-4 pb-0 h-6/6 justify-center">
        <div className="flex flex-col gap-2">
          <StockTable mainStock={setSelectedStock} />
          <TradePopup mainStock={selectedStock} />
        </div>
        <div className="w-6/12 pb-4 pl-3">
          <div className="h-1/4">
            <CompanyDetails mainStock={selectedStock} />
          </div>
          <div className="h-3/4 pt-2">
            <StockTicker
              mainStock={selectedStock?.symbolLong || "NASDAQ:AAPL"}
            />
          </div>
        </div>

        <div className="w-3/12">
          <StockStats mainStock={selectedStock} />
        </div>
      </div>
    </div>
  );
};
