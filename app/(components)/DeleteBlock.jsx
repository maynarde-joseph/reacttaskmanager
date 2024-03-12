"use client";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const DeleteBlock = ({ id, setTicketState }) => {
  const [prevTickets, setTickets] = setTicketState;

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
        const updatedTickets = prevTickets.filter(
          (ticket) => JSON.parse(ticket).dataset_type.split("_")[0] != id
        );
        setTickets(updatedTickets);
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
