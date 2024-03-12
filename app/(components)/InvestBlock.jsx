"use client";
import React from "react";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// for changing currencry
const InvestBlock = ({ symbol }) => {
  const [inputValue, setInputValue] = useState("");
  const investTicket = () => {
    withReactContent(Swal)
      .fire({
        title: <i>Convert currancy to:</i>,
        input: "text",
        inputValue,
        preConfirm: async () => {
          const inputValue = Swal.getInput()?.value || "";
          setInputValue(inputValue);
          try {
            const response = await fetch(
              `https://li2umvobnkc47pt5d4dcyjedwm0qaixq.lambda-url.ap-southeast-2.on.aws/?symbol=${encodeURIComponent(
                symbol
              )}?region=${encodeURIComponent(inputValue)}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            const data = await response.json();
            return data;
          } catch (error) {
            console.error("Error invoking API route:", error);
            throw error;
          }
        },
      })
      .then((result) => {
        if (result.isConfirmed && result.value) {
          Swal.fire({
            title: <i>API Response:</i>,
            html: <pre>{JSON.stringify(result.value, null, 2)}</pre>,
          });
        }
      });
  };

  return (
    <div onClick={investTicket}>
      <FontAwesomeIcon
        icon={faMoneyBillTransfer}
        className=" text-red-400 hover:cursor-pointer hover:text-red-200 pt-1.5"
      />
    </div>
  );
};

export default InvestBlock;
