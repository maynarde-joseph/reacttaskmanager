"use client";
import React from "react";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useSession } from "next-auth/react";

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
          `../api/latest?symbol=${encodeURIComponent(inputValue)}`
        );

        if (response.ok) {
          const { data } = await response.json();
          const bodyValue = data.body;
          const stockInfo = {
            stock_name: inputValue,
            current_price: bodyValue,
          };
          // setTickets((prevTickets) => [...prevTickets, stockInfo]);
          let tempStocks = session?.user.stocks;
          tempStocks.push(stockInfo.stock_name);
          update({ stocks: tempStocks });
        } else {
          console.error("Error:", response.status);
        }
      },
    });
  };

  return (
    <div onClick={showSwal}>
      <FontAwesomeIcon
        icon={faMagnifyingGlassDollar}
        size="2x"
        className="text-white hover:cursor-pointer hover:text-red-200"
      />
    </div>
  );
}

export default SearchBar;
