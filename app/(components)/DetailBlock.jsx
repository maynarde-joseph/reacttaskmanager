"use client";

import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const DetailBlock = ({ id }) => {
  const emptyForm = {
    start_date: "",
    end_date: "",
    SMA: false,
    EMA_enabled: false,
    EMA_period: 0,
    RSI_enabled: false,
    RSI_period: 0,
    MACD: false,
  };

  const showPopupForm = () => {
    Swal.fire({
      title: "Preproccessing Form",
      html:
        '<input id="start_date" class="swal2-input" placeholder="Start Date" type="date">' +
        '<input id="end_date" class="swal2-input" placeholder="End Date" type="date">' +
        '<div class="swal2-checkbox-container">' +
        '<input id="sma" type="checkbox" class="swal2-checkbox">' +
        '<label for="sma" class="swal2-label">SMA</label>' +
        "</div>" +
        '<div class="swal2-checkbox-container">' +
        '<input id="ema_enabled" type="checkbox" class="swal2-checkbox">' +
        '<label for="ema_enabled" class="swal2-label">EMA Enabled</label>' +
        "</div>" +
        '<input id="ema_period" class="swal2-input" placeholder="EMA Period" type="number">' +
        '<div class="swal2-checkbox-container">' +
        '<input id="rsi_enabled" type="checkbox" class="swal2-checkbox">' +
        '<label for="rsi_enabled" class="swal2-label">RSI Enabled</label>' +
        "</div>" +
        '<input id="rsi_period" class="swal2-input" placeholder="RSI Period" type="number">' +
        '<div class="swal2-checkbox-container">' +
        '<input id="macd" type="checkbox" class="swal2-checkbox">' +
        '<label for="macd" class="swal2-label">MACD</label>' +
        "</div>",
      focusConfirm: false,
      preConfirm: async () => {
        const userPref = {
          selections: {
            symbol: id,
            start_date: document.getElementById("start_date").value || "",
            end_date: document.getElementById("end_date").value || "",
            metrics: {
              SMA: document.getElementById("sma").checked,
              EMA: {
                enabled: document.getElementById("ema_enabled").checked,
                period:
                  parseInt(document.getElementById("ema_period").value) || 0,
              },
              RSI: {
                enabled: document.getElementById("rsi_enabled").checked,
                period:
                  parseInt(document.getElementById("rsi_period").value) || 14,
              },
              MACD: document.getElementById("macd").checked,
            },
          },
        };

        try {
          const response = await fetch(
            `https://jdktzejo4f.execute-api.ap-southeast-2.amazonaws.com/prod/preproccessing?symbol=${encodeURIComponent(
              userPref.selections.symbol
            )}&start_date=${encodeURIComponent(
              userPref.selections.start_date
            )}&end_date=${encodeURIComponent(
              userPref.selections.end_date
            )}&sma=${encodeURIComponent(
              userPref.selections.metrics.SMA
            )}&ema_enabled=${encodeURIComponent(
              userPref.selections.metrics.EMA.enabled
            )}&ema_period=${encodeURIComponent(
              userPref.selections.metrics.EMA.period
            )}rsi_enabled=${encodeURIComponent(
              userPref.selections.metrics.RSI.enabled
            )}rsi_period=${encodeURIComponent(
              userPref.selections.metrics.RSI.period
            )}&macd=${encodeURIComponent(userPref.selections.metrics.MACD)}`,
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
    <div onClick={showPopupForm}>
      <FontAwesomeIcon
        icon={faCircleInfo}
        className=" text-red-400 hover:cursor-pointer hover:text-red-200 pt-1.5"
      />
    </div>
  );
};

export default DetailBlock;
