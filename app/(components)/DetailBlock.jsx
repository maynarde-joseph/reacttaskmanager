"use client";

import {
  faCircleInfo,
  faPenToSquare,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

const DetailBlock = ({ id }) => {
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
      icon={faCircleInfo}
      className=" text-red-400 hover:cursor-pointer hover:text-red-200 pt-1.5"
      // onClick={deleteTicket}
    />
  );
};

export default DetailBlock;
