import Link from "next/link";
import React from "react";
import {
  faBolt,
  faCartPlus,
  faClock,
  faCloudMoon,
  faGear,
  faMoneyBillTrendUp,
  faRankingStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SignOut from "./SignOut";
import NameTag from "./NameTag";

const Nav = () => {
  return (
    <div className="bg-cover bg-left bg-hero-pattern1 text-white left-0 top-0 bottom-0 p-4 hidden sm:block rounded-xl m-1.5">
      <div className="flex items-center mb-4">
        <div className="pr-1">
          <FontAwesomeIcon
            icon={faCloudMoon}
            size="2xl"
            className="text-red-400"
          />
        </div>
        <h1 className="text-2xl font-bold">CrescentByte</h1>
      </div>
      <NameTag />
      <nav className="bg-nav p-4">
        <ul className="space-y-2">
          <li className="flex flex-row">
            <Link
              href="/"
              className="py-2 px-4 rounded hover:bg-gray-800 flex items-center justify-between w-40"
            >
              <div className="">Stocks</div>
              <div>
                <FontAwesomeIcon
                  icon={faMoneyBillTrendUp}
                  size="lg"
                  className="text-white hover:cursor-pointer hover:text-red-200 pr-1"
                />
              </div>
            </Link>
          </li>
          <li className="flex flex-row">
            <Link
              href="/"
              className="py-2 px-4 rounded hover:bg-gray-800 flex items-center justify-between w-40"
            >
              <div className="">History</div>
              <div>
                <FontAwesomeIcon
                  icon={faClock}
                  size="lg"
                  className="text-white hover:cursor-pointer hover:text-red-200 pr-1"
                />
              </div>
            </Link>
          </li>
          <li className="flex flex-row">
            <Link
              href="/"
              className="py-2 px-4 rounded hover:bg-gray-800 flex items-center justify-between w-40"
            >
              <div className="">Ranking</div>
              <div>
                <FontAwesomeIcon
                  icon={faRankingStar}
                  size="lg"
                  className="text-white hover:cursor-pointer hover:text-red-200"
                />
              </div>
            </Link>
          </li>
          <li className="flex flex-row">
            <Link
              href="/"
              className="py-2 px-4 rounded hover:bg-gray-800 flex items-center justify-between w-40"
            >
              <div className="">Recharge</div>
              <div>
                <FontAwesomeIcon
                  icon={faBolt}
                  size="lg"
                  className="text-white hover:cursor-pointer hover:text-red-200 pr-1"
                />
              </div>
            </Link>
          </li>
          <li className="flex flex-row">
            <Link
              href="/"
              className="py-2 px-4 rounded hover:bg-gray-800 flex items-center justify-between w-40"
            >
              <div className="">Subscribe</div>
              <div>
                <FontAwesomeIcon
                  icon={faCartPlus}
                  size="lg"
                  className="text-white hover:cursor-pointer hover:text-red-200 pr-1"
                />
              </div>
            </Link>
          </li>
          <li className="flex flex-row">
            <Link
              href="/"
              className="py-2 px-4 rounded hover:bg-gray-800 flex items-center justify-between w-40"
            >
              <div className="">Settings</div>
              <div>
                <FontAwesomeIcon
                  icon={faGear}
                  size="lg"
                  className="text-white hover:cursor-pointer hover:text-red-200 pr-1"
                />
              </div>
            </Link>
          </li>
          <SignOut />
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
