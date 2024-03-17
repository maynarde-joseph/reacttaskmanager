"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NameTag = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-nav p-4 mb-4 flex flex-row gap-4 rounded hover:bg-gray-800 py-2 px-4">
      <FontAwesomeIcon
        icon={faAddressCard}
        size="lg"
        className=" text-white hover:cursor-pointer hover:text-red-200 mt-1.5"
      />
      <div className="mt-1">{session?.user?.name}</div>
    </div>
  );
};

export default NameTag;
