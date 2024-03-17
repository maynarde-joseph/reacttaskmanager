"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";

const DeleteBlock = ({ id }) => {
  const { data: session, status, update } = useSession();

  const deleteTicket = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "you want to end this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, end it!",
    }).then((result) => {
      if (result.isConfirmed) {
        let tempStocks = session?.user.stocks;
        tempStocks = tempStocks.filter((item) => item !== id);
        update({ stocks: tempStocks });
        Swal.fire("Deleted!", "The ticket has been deleted.", "success");
      }
    });
  };

  return (
    <FontAwesomeIcon
      icon={faTrash}
      className="text-red-400 hover:cursor-pointer hover:text-red-200 pt-1.5"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
