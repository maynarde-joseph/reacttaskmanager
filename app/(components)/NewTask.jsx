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
            "https://f82t7r4fy0.execute-api.ap-southeast-2.amazonaws.com/dev",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ symbol: inputValue }),
            }
          );

          const data = await response.json();
          console.log(data);
          // Handle the response data as needed
        } catch (error) {
          console.error("Error invoking API route:", error);
          // Handle the error
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
