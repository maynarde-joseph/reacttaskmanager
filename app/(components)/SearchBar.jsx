"use client";
import React from "react";
import { faMagnifyingGlassDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: <i>Input something</i>,
      input: "text",
      inputValue,
      preConfirm: async () => {
        const inputValue = Swal.getInput()?.value || "";
        setInputValue(inputValue);

        try {
          const response = await fetch(
            `https://li2umvobnkc47pt5d4dcyjedwm0qaixq.lambda-url.ap-southeast-2.on.aws/?symbol=${encodeURIComponent(
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
        icon={faMagnifyingGlassDollar}
        size="2x"
        className="text-white hover:cursor-pointer hover:text-red-200"
      />
    </div>
  );
}

export default SearchBar;
