"use client";

import React from "react";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

// for changing currencry
const InvestBlock = ({ id }) => {
  const emptyForm = {
    symbol: "",
    base_curr: "",
    target_curr: "",
    selected_keys: "",
  };
  const investTicket = () => {
    Swal.fire({
      title: "Currency exchange Form",
      html:
        '<input id="base_curr" class="swal2-input" placeholder="base_curr" type="string">' +
        '<input id="target_curr" class="swal2-input" placeholder="target_curr" type="string">' +
        '<input id="selected_keys" class="swal2-input" placeholder="selected_keys" type="string">',
      focusConfirm: false,
      preConfirm: async () => {
        const userPref = {
          selections: {
            symbol: id,
            base_curr: document.getElementById("base_curr").value || "",
            target_curr: document.getElementById("target_curr").value || "",
            selected_keys: document.getElementById("selected_keys").value || "",
          },
        };

        try {
          const response = await fetch(
            `https://jdktzejo4f.execute-api.ap-southeast-2.amazonaws.com/prod/convert?symbol=${encodeURIComponent(
              userPref.selections.symbol
            )}&base_curr=${encodeURIComponent(
              userPref.selections.base_curr
            )}&target_curr=${encodeURIComponent(
              userPref.selections.target_curr
            )}&selected_keys=${encodeURIComponent(
              userPref.selections.selected_keys
            )}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          const data = await response.json();
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
    <div onClick={investTicket}>
      <FontAwesomeIcon
        icon={faMoneyBillTransfer}
        className=" text-red-400 hover:cursor-pointer hover:text-red-200 pt-1.5"
      />
    </div>
  );
};

export default InvestBlock;
