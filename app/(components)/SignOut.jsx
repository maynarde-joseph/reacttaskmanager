"use client";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const SignOut = () => {
  const { data: session } = useSession();

  return (
    <li className="flex flex-row">
      <div
        className="py-2 px-4 rounded hover:bg-gray-800 flex items-center justify-between w-40"
        onClick={() => signOut()}
      >
        <div className="">Sign Out</div>
        {/* <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div> */}
        <div>
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            size="lg"
            className="text-white hover:cursor-pointer hover:text-red-200 pr-1"
          />
        </div>
      </div>
    </li>
  );
};

export default SignOut;
