"use clinet";

import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import NameTag from "./NameTag";
import { ModeToggle } from "./ThemeToggle";

export const Temp2 = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4 py-8">
      <h1 className="text-xl font-semibold flex-grow">Dashboard</h1>
      <div className="flex flex-row">
        <div className="flex items-center pr-2">
          <ModeToggle />
        </div>
        <NameTag />
      </div>
    </header>
  );
};

export default Temp2;
