import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

// Navigation bar
// Make it flex and for the icons space them out by x-4
// Then we have justify between to put the email to the right

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex items-center space-x-4">
        <Link href={"/"}>
          <FontAwesomeIcon icon={faHome} className="icon" />
        </Link>
        <Link href={"/TicketPage/new"}>
          <FontAwesomeIcon icon={faTicket} className="icon" />
        </Link>
      </div>
      <div>
        <p className="text-default-text">joseph@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
