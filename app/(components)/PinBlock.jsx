"use client";
import React from "react";
import { faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// for latest data
const PinBlock = ({ symbol }) => {
  const investTicket = () => {
    withReactContent(Swal).fire({
      title: <i>Get current value:</i>,
      preConfirm: async () => {
        try {
          const response = await fetch(
            `https://li2umvobnkc47pt5d4dcyjedwm0qaixq.lambda-url.ap-southeast-2.on.aws/?symbol=${encodeURIComponent(
              symbol
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
          setTickets((prevTickets) => [...prevTickets, data]);
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
        icon={faThumbTack}
        className=" text-red-400 hover:cursor-pointer hover:text-red-200 pt-1.5"
      />
    </div>
  );
};

export default PinBlock;
