"use client";
"use client";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import {
  MoonIcon,
  GearIcon,
  ExitIcon,
  Crosshair2Icon,
  RocketIcon,
  BarChartIcon,
  ArchiveIcon,
  DashboardIcon,
} from "@radix-ui/react-icons";
import { usePathname } from "next/navigation";
import NameTag from "./NameTag";
import { ModeToggle } from "./ThemeToggle";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipProvider } from "@/components/ui/tooltip";

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
    <TooltipProvider>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Link
            href="/dashboard"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <MoonIcon width={24} height={24} transform="scale(-1,1)" />
            <span className="sr-only">CRESCENTBYTE</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <DashboardIcon width={24} height={24} />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/analytics"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <BarChartIcon width={24} height={24} />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/portfolio"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <ArchiveIcon width={24} height={24} />
                <span className="sr-only">Portfolio</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Portfolio</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/ranking"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Crosshair2Icon width={24} height={24} />
                <span className="sr-only">Ranking</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Ranking</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/subscription"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <RocketIcon width={24} height={24} />
                <span className="sr-only">Subscription</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Subscription</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <GearIcon width={24} height={24} />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <div onClick={() => signOut()}>
                <Link
                  href="/"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <ExitIcon width={24} height={24} />
                  <span className="sr-only">Sign Out</span>
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent side="right">Sign Out</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </TooltipProvider>
  );
};

export default Nav;
