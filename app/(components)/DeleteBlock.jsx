"use client";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id, setTicketState, arrayId }) => {
  const [prevTickets, setTickets] = setTicketState;

  const deleteTicket = () => {
    const updatedTickets = prevTickets.filter(
      (ticket) => ticket.dataset_type != id
    );
    setTickets(updatedTickets);
  };

  return (
    <FontAwesomeIcon
      icon={faTrash}
      className=" text-red-400 hover:cursor-pointer hover:text-red-200 pt-1.5"
      onClick={deleteTicket}
    />
  );
};

export default DeleteBlock;
