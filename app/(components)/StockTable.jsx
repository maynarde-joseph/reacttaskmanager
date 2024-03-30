"use client";

import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import { useSession } from "next-auth/react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DeleteBlock from "./DeleteBlock";
import LargestChange from "./LargestChange";
import DetailBlock from "./DetailBlock";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// might want to use useMemo to ensure some things dont get rerendered.
// looking into how to improve code style here

const getCurrData = async (stockSymbol) => {
  const response = await fetch(
    `api/info?symbol=${encodeURIComponent(stockSymbol)}`
  );
  if (response.ok) {
    const { data } = await response.json();
    if (data && data.body) {
      const bodyValue = JSON.parse(data.body);
      const stockInfo = {
        symbol: bodyValue.symbol,
        longName: bodyValue.longName,
        bid: bodyValue.bid,
        bidSize: bodyValue.bidSize,
        ask: bodyValue.ask,
        askSize: bodyValue.askSize,
        regularMarketPrice: bodyValue.currentPrice,
        regularMarketDayHigh: bodyValue.regularMarketDayHigh,
        regularMarketDayLow: bodyValue.regularMarketDayLow,
        regularMarketVolume: bodyValue.regularMarketVolume,
        marketCap: bodyValue.marketCap,
        fiftyTwoWeekHigh: bodyValue.fiftyTwoWeekHigh,
        fiftyTwoWeekLow: bodyValue.fiftyTwoWeekLow,
        industry: bodyValue.industry,
        sector: bodyValue.sector,
        averageVolume10days: bodyValue.averageVolume10days,
        beta: bodyValue.beta,
        floatShares: bodyValue.floatShares,
        priceToBook: bodyValue.priceToBook,
        exchange: bodyValue.exchange,
      };
      return stockInfo;
    }
  } else {
    console.error("Error:", response.status);
  }
};

const StockTable = ({ mainStock }) => {
  const [stockData, setStockData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { data: session, status, update } = useSession();
  const setSelectedStock = mainStock;

  const handleStockClick = (stockName) => {
    setSelectedStock(stockName);
    console.log("CHANGED");
  };

  let allStocks = session?.user?.stocks;

  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      setError(null);

      try {
        const promises = allStocks?.map((stock) => getCurrData(stock));
        if (Array.isArray(promises)) {
          const data = await Promise.all(promises);
          const filteredData = data.filter((item) => item !== undefined);
          setStockData(filteredData);
          if (filteredData.length > 0) {
            setSelectedStock(filteredData[0]);
          }
        }
      } catch (error) {
        setError("Failed to fetch stock data. Please try again.");
      }

      setLoading(false);
    };

    fetchStockData();
  }, [allStocks, setSelectedStock]);

  return (
    <div className="py-2">
      <Card>
        <CardHeader className="px-7">
          <div className="flex flex-row items-center justify-between">
            <CardTitle>Your Watchlist</CardTitle>
            <div className="pr-2">
              <SearchBar />
            </div>
          </div>
          <CardDescription>Stocks you are currently watching.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-y-auto max-h-52">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Stock</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead className="hidden sm:table-cell pr-2">
                    Details
                  </TableHead>
                  <TableHead className="hidden md:table-cell pr-2">
                    Delete
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="overflow-y-scroll h-1/12">
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={5}>Loading...</TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell colSpan={5}>{error}</TableCell>
                  </TableRow>
                ) : stockData.length > 0 ? (
                  stockData.map((ticket, index) => (
                    <TableRow
                      key={index}
                      onClick={() => handleStockClick(ticket)}
                      className="cursor-pointer"
                    >
                      <TableCell>
                        <div className="font-medium">{ticket.symbol}</div>
                      </TableCell>
                      <TableCell>{ticket.regularMarketPrice}</TableCell>
                      <TableCell
                        onClick={(e) => e.stopPropagation()}
                        className="hidden sm:table-cell pl-8 pr-2"
                      >
                        <DetailBlock id={ticket.symbol} />
                      </TableCell>
                      <TableCell
                        onClick={(e) => e.stopPropagation()}
                        className="hidden md:table-cell pl-8 pr-2"
                      >
                        <DeleteBlock id={ticket.symbol} />
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5}>No stocks available</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockTable;
