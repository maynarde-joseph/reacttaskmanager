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
      title: <i>Input something</i>,
      input: "text",
      inputValue,
      preConfirm: async () => {
        const inputValue = Swal.getInput()?.value || "";
        setInputValue(inputValue);

        try {
          const response = await fetch(
            "https://lutyiiaena4rb5lkbh7e4gj2zi0lxqcx.lambda-url.ap-southeast-2.on.aws/",
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
