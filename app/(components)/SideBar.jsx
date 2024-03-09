import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white w-64 fixed left-0 top-0 bottom-0 p-4">
      <h1 className="text-2xl font-bold mb-4">My App</h1>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/" legacyBehavior>
              <a className="block py-2 px-4 rounded hover:bg-gray-800">
                Dashboard
              </a>
            </Link>
          </li>
          <li>
            <Link href="/tickets" legacyBehavior>
              <a className="block py-2 px-4 rounded hover:bg-gray-800">
                Tickets
              </a>
            </Link>
          </li>
          <li>
            <Link href="/settings" legacyBehavior>
              <a className="block py-2 px-4 rounded hover:bg-gray-800">
                Settings
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
