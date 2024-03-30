"use client";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Receipt } from "lucide-react";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const getMarketStatus = async () => {
  const response = await fetch(`api/status`);
  if (response.ok) {
    const { data } = await response.json();
    return data;
  } else {
    console.error("Error:", response.status);
  }
};

export const StockStats = ({ mainStock }) => {
  const [stockData, setStockData] = useState(null);
  useEffect(() => {
    setStockData(mainStock);
  }, [mainStock]);

  const formatLargeNumber = (number) => {
    const trillion = 1e12;
    const billion = 1e9;
    const million = 1e6;

    if (number >= trillion) {
      return `$${(number / trillion).toFixed(1)}T`;
    } else if (number >= billion) {
      return `$${(number / billion).toFixed(1)}B`;
    } else if (number >= million) {
      return `$${(number / million).toFixed(1)}M`;
    } else {
      return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    }
  };

  return (
    <div className="p-4 pt-3">
      {stockData ? (
        <Card className="overflow-hidden">
          <CardHeader className="flex flex-row items-start bg-muted/50">
            <div className="grid gap-0.5">
              <CardTitle className="text-lg">
                {stockData.symbol} ({stockData.longName})
              </CardTitle>
              <CardDescription>{stockData.industry}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <div className="font-semibold">Latest Bid/Ask</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Bid</span>
                  <span>
                    {(stockData.bid || 0).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Bid Amount</span>
                  <span>{stockData.bidSize || 0}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Ask</span>
                  <span>
                    {(stockData.ask || 0).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Ask Amount</span>
                  <span>{stockData.askSize || 0}</span>
                </li>
              </ul>
              <Separator className="my-2" />
              <div className="font-semibold">Range</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Day</span>
                  <span>
                    {stockData.regularMarketDayLow.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    -{" "}
                    {stockData.regularMarketDayHigh.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">52W</span>
                  <span>
                    {stockData.fiftyTwoWeekLow.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    -{" "}
                    {stockData.fiftyTwoWeekHigh.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </li>
              </ul>
              <Separator className="my-2" />
              <div className="font-semibold">Key Stats</div>
              <ul className="grid gap-3">
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Volume</span>
                  <span>
                    {formatLargeNumber(stockData.regularMarketVolume)}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">
                    Avg Volume (10W)
                  </span>
                  <span>
                    {formatLargeNumber(stockData.averageVolume10days)}
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Market Cap</span>
                  <span>{formatLargeNumber(stockData.marketCap)}</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-muted-foreground">Price to Book</span>
                  <span>
                    {stockData.priceToBook.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
