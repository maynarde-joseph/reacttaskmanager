"use client";

import React, { useState, useEffect } from "react";
import NewTask from "./NewTask";
import SearchBar from "./SearchBar";
import { useSession } from "next-auth/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteBlock from "./DeleteBlock";
import LargestChange from "./LargestChange";

const getCurrData = async (stockSymbol) => {
  const response = await fetch(
    `api/latest?symbol=${encodeURIComponent(stockSymbol)}`
  );

  if (response.ok) {
    const { data } = await response.json();
    const bodyValue = data.body;
    const stockInfo = {
      stock_name: stockSymbol,
      current_price: bodyValue,
    };
    return stockInfo;
  } else {
    console.error("Error:", response.status);
  }
};

const StockTable = ({ mainStock }) => {
  const [stockData, setStockData] = useState([]);
  const { data: session, status, update } = useSession();
  const setSelectedStock = mainStock;

  const handleStockClick = (stockName) => {
    setSelectedStock(stockName);
    console.log("CHANGED");
  };

  let allStocks = session?.user?.stocks;

  useEffect(() => {
    const fetchStockData = async () => {
      const promises = allStocks?.map((stock) => getCurrData(stock));
      if (Array.isArray(promises)) {
        const data = await Promise.all(promises);
        setStockData(data);
      }
    };

    fetchStockData();
  }, [allStocks]);

  return (
    <div className="p-2 border-t-2">
      <div className="">
        <div className="flex flex-row items-center justify-between">
          <h3 className="pl-3 pb-1 text-lg">Your Watchlist:</h3>
          <div className="pr-2">
            <SearchBar />
          </div>
        </div>
        <hr className="mt-2 mb-5" />

        <Table>
          <TableCaption>The End</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Stock Name</TableHead>
              <TableHead>Current Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {stockData.map((ticket, index) => (
              <TableRow
                key={index}
                onClick={() => handleStockClick(ticket.stock_name)}
                className="cursor-pointer"
              >
                <TableCell>{ticket.stock_name}</TableCell>
                <TableCell>{ticket.current_price}</TableCell>
                <TableCell>
                  <LargestChange
                    id={ticket.stock_name}
                    valueX={ticket.current_price}
                  />
                </TableCell>
                <TableCell>
                  <DeleteBlock id={ticket.stock_name} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StockTable;
