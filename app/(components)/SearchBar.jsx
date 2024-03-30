"use client";
import React from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useSession } from "next-auth/react";
import { PlusIcon } from "lucide-react";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const { data: session, status, update } = useSession();

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: <i>Start tracking:</i>,
      input: "text",
      inputValue,
      preConfirm: async () => {
        const inputValue = Swal.getInput()?.value || "";
        setInputValue(inputValue);

        const response = await fetch(
          `api/info?symbol=${encodeURIComponent(inputValue)}`
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
            averageVolume10days: bodyValue.averageVolume10days,
            beta: bodyValue.beta,
            floatShares: bodyValue.floatShares,
            priceToBook: bodyValue.priceToBook,
            exchange: bodyValue.exchange,
          };
          // setTickets((prevTickets) => [...prevTickets, stockInfo]);
          if (stockInfo.exchange == "NMS") {
            let tempStocks = session?.user.stocks;
            if (!tempStocks.includes(stockInfo.symbol)) {
              tempStocks.push(stockInfo.symbol);
              update({ stocks: tempStocks });
            } else {
              console.error("Already in watched");
            }
          } else {
            console.error("Not a Nasqad stock");
          }
        } else {
          console.error("Error:", response.status);
        }
      },
    });
  };

  return (
    <div onClick={showSwal} className="hover:cursor-pointer pb-1">
      <PlusIcon width={28} height={28} />
    </div>
  );
}

export default SearchBar;
