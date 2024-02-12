"use client";

import { faPenToSquare, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const EditBlock = ({ id }) => {
  // const router = useRouter();

  // const deleteTicket = async () => {
  //   const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
  //     method: "DELETE",
  //   });
  //   if (res.ok) {
  //     router.refresh();
  //   }
  // };

  return (
    <FontAwesomeIcon
      icon={faPenToSquare}
      className=" text-red-400 hover:cursor-pointer hover:text-red-200"
      // onClick={deleteTicket}
    />
  );
};

export default EditBlock;
