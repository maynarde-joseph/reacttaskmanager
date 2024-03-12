"use client";
import React from "react";
import { faFileWaveform } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";

// for latest data
const LargestChange = ({ symbol }) => {
  const [inputValue, setInputValue] = useState("");

  const investTicket = () => {
    withReactContent(Swal).fire({
      title: <i>Largest changes:</i>,
      input: "text",
      inputValue,
      preConfirm: async () => {
        const inputValue = Swal.getInput()?.value || "";
        setInputValue(inputValue);
        try {
          const response = await fetch(
            `https://li2umvobnkc47pt5d4dcyjedwm0qaixq.lambda-url.ap-southeast-2.on.aws/?symbol=${encodeURIComponent(
              symbol
            )}?sort_type=${encodeURIComponent(inputValue)}`,
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
        icon={faFileWaveform}
        className=" text-red-400 hover:cursor-pointer hover:text-red-200 pt-1.5"
      />
    </div>
  );
};

export default LargestChange;
