"use client";
import React from "react";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function SearchBar({ setTicketState }) {
  const [inputValue, setInputValue] = useState("");
  const [prevTickets, setTickets] = setTicketState;
  const showSwal = () => {
    withReactContent(Swal).fire({
      title: <i>Start tracking:</i>,
      input: "text",
      inputValue,
      preConfirm: async () => {
        const inputValue = Swal.getInput()?.value || "";
        setInputValue(inputValue);

        try {
          const response = await fetch(
            `https://kqaxf2taic.execute-api.ap-southeast-2.amazonaws.com/dev?symbol=${encodeURIComponent(
              inputValue
            )}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const data = await response.json();
          console.log(data.body);
          setTickets((prevTickets) => [...prevTickets, data.body]);
          let toPrint = JSON.stringify(data, null, 2);
          Swal.fire({
            title: "API Response",
            text: toPrint,
          });
        } catch (error) {
          console.error("Error invoking API route:", error);
          throw error;
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
