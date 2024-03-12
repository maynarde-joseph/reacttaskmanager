"use client";

import React from "react";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function NewTask() {
  const [inputValue, setInputValue] = useState("");

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: <i>Get data for:</i>,
      input: "text",
      inputValue,
      preConfirm: async () => {
        const inputValue = Swal.getInput()?.value || "";
        setInputValue(inputValue);
        try {
          const response = await fetch(
            "https://jdktzejo4f.execute-api.ap-southeast-2.amazonaws.com/prod/upload",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ body: { symbol: inputValue } }),
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
    <div onClick={showSwal}>
      <FontAwesomeIcon
        icon={faNotesMedical}
        size="2x"
        className="text-white hover:cursor-pointer hover:text-red-200"
      />
    </div>
  );
}

export default NewTask;
