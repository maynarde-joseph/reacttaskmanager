"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import {
  MoonIcon,
  GearIcon,
  ClockIcon,
  ExitIcon,
  HomeIcon,
  Crosshair2Icon,
  RocketIcon,
  BarChartIcon,
} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import NameTag from "./NameTag";
// add hidden sm:block to hide on phone
const Nav = () => {
  let { data: session } = useSession();
  let pathname = usePathname();

  if (pathname === "/") {
    return null;
  }
  if (pathname === "/register") {
    return null;
  }

  return (
    <div className="bg-cover bg-left bg-hero-pattern1 left-0 top-0 bottom-0 p-4 flex flex-col border-r-2">
      <div className="link-7 mt-4">
        <Link href="/dashboard" className="pr-1 flex items-center">
          <MoonIcon width="30" height="30" transform="scale(-1,1)" />
          <h1 className="text-7 font-bold">CRESCENTBYTE</h1>
        </Link>
        <hr className="mt-2 mb-20" />
      </div>
      <div className="flex-grow">
        <div className="link-1">
          <div>
            <Link
              href="/dashboard"
              className="py-2 pl-4 rounded flex items-center"
            >
              <HomeIcon width={24} height={24} />
              <div className="mb-1 ml-6 text-6">Dashboard</div>
            </Link>
          </div>
        </div>
        <div className="link-1">
          <div>
            <Link
              href="/dashboard"
              className="py-2 pl-4 rounded flex items-center"
            >
              <BarChartIcon width={24} height={24} />
              <div className="mb-1 ml-6 text-6">Analytics</div>
            </Link>
          </div>
        </div>
        <div className="link-1">
          <div>
            <Link
              href="/dashboard"
              className="py-2 pl-4 rounded flex items-center"
            >
              <ClockIcon width={24} height={24} />
              <div className="mb-1 ml-6 text-6">History</div>
            </Link>
          </div>
        </div>
        <div className="link-1">
          <div>
            <Link
              href="/dashboard"
              className="py-2 pl-4 rounded flex items-center"
            >
              <Crosshair2Icon width={24} height={24} />
              <div className="mb-1 ml-6 text-6">Ranking</div>
            </Link>
          </div>
        </div>
        <div className="link-1">
          <div>
            <Link
              href="/dashboard"
              className="py-2 pl-4 rounded flex items-center"
            >
              <RocketIcon width={24} height={24} />
              <div className="mb-1 ml-6 text-6">Recharge</div>
            </Link>
          </div>
        </div>
        <div className="link-1">
          <div>
            <Link
              href="/dashboard"
              className="py-2 pl-4 rounded flex items-center"
            >
              <GearIcon width={24} height={24} />
              <div className="mb-1 ml-6 text-6">Settings</div>
            </Link>
          </div>
        </div>
        <div className="link-1" onClick={() => signOut()}>
          <div>
            <Link href="/" className="py-2 pl-4 rounded flex items-center">
              <ExitIcon width={24} height={24} />
              <div className="mb-1 ml-6 text-6">Sign Out</div>
            </Link>
          </div>
        </div>
      </div>
      <NameTag />
    </div>
  );
};

export default Nav;
