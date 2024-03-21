"use client";
import React from "react";
import { faFileWaveform } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState } from "react";
import { useSession } from "next-auth/react";

const LargestChange = ({ id, valueX }) => {
  const [inputValue, setInputValue] = useState("");
  const { data: session, status, update } = useSession();

  const investTicket = () => {
    withReactContent(Swal).fire({
      title: <i>Largest changes:</i>,
      input: "number",
      inputValue,
      showCancelButton: true,
      preConfirm: async () => {
        const inputValue = Swal.getInput()?.value || 0;
        const quantity = parseInt(inputValue);
        const totalStock = quantity / valueX;
        if (quantity > 0) {
          await Swal.fire({
            title: "Confirm Investment",
            html: `Are you sure you want to buy ${totalStock} ${id} stock(s)? Total cost: $${quantity}`,
            showCancelButton: true,
            confirmButtonText: "Confirm",
            cancelButtonText: "Cancel",
          }).then((result) => {
            if (result.isConfirmed) {
              let investmentObj = {
                stock: id,
                amount: totalStock,
                buy_date: new Date(),
                sell_date: null,
                stock_value: quantity,
                currency: "USD",
              };
              let tempInvestments = session?.user.curr_inv;
              // WHY DOES PUSH RETURN A NUMBER
              tempInvestments.push(investmentObj);
              update({ curr_inv: tempInvestments });
              Swal.fire("Invested!", "You bought stuff.", "success");
            }
          });
        }
      },
    });
  };

  return (
    <div onClick={investTicket}>
      <FontAwesomeIcon icon={faFileWaveform} className="pt-1.5" />
    </div>
  );
};

export default LargestChange;
