"use client";
import React, { useEffect, useState } from "react";
import MiniGraph from "./MiniGraph";

const getCurrData = async (stockSymbol) => {
  const response = await fetch(
    `api/info?symbol=${encodeURIComponent(stockSymbol)}`
  );
  if (response.ok) {
    const { data } = await response.json();
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
    };
    return stockInfo;
  } else {
    console.error("Error:", response.status);
  }
};

const getMarketStatus = async () => {
  const response = await fetch(`api/status`);
  if (response.ok) {
    const { data } = await response.json();
    const bodyValue = JSON.parse(data.body);
    return bodyValue;
  } else {
    console.error("Error:", response.status);
  }
};

export const StockStats = ({ mainStock }) => {
  const [stockData, setStockData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCurrData(mainStock);
      // const marketStatus = await getMarketStatus();
      // console.log(marketStatus);
      setStockData(data);
    };

    fetchData();
  }, [mainStock]);

  return (
    <div className="flex flex-col justify-between gap-4 p-5">
      {stockData ? (
        <div className="flex flex-row gap-3">
          <div className="flex-grow">
            <h1 className="">
              {stockData.symbol}({stockData.longName})
            </h1>
            <p className="font-semibold text-4xl">
              {stockData.regularMarketPrice}
            </p>
            <p className="">
              {stockData.industry} - {stockData.sector}
            </p>
          </div>
          <div className="flex gap-2 pr-48 py-1">
            <div>
              <div>
                <p className="font-semibold">Bid: {stockData.bid}</p>
              </div>
              <div>
                <p className="font-semibold">Bid Size: {stockData.bidSize}</p>
              </div>
            </div>
            <div>
              <div>
                <p className="font-semibold">Ask: {stockData.ask}</p>
              </div>
              <div>
                <p className="font-semibold">Ask Size: {stockData.askSize}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold">
                Days RANGE: {stockData.regularMarketDayLow} -{" "}
                {stockData.regularMarketDayHigh}
              </p>
              <p className="font-semibold">
                52WKs RANGE: {stockData.fiftyTwoWeekLow} -{" "}
                {stockData.fiftyTwoWeekHigh}
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Volume: {stockData.regularMarketVolume}
              </p>
              <p className="font-semibold">Market Cap: {stockData.marketCap}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};
