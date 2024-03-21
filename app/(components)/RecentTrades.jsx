import React from "react";
import TicketCard from "./TicketCard";
import StockCard from "./StockCard";

export const RecentTrades = () => {
  let dataTemp = { stock_name: "TSLA", current_price: "173" };
  return (
    <div className="p-5">
      <h2 className="text-2xl mb-4 pl-2">Recent Trades</h2>
      <div className="flex flex-col gap-2">
        <StockCard ticket={dataTemp} />
        <StockCard ticket={dataTemp} />
        <StockCard ticket={dataTemp} />
      </div>
    </div>
  );
};
