"use client";
import * as React from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MarketToggle({ selectedMarket, setSelectedMarket }) {
  useEffect(() => {
    // Perform any necessary actions based on the selected market
    console.log("Selected market:", selectedMarket);
  }, [selectedMarket]);

  return (
    <div className="ml-auto">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="p-4">
            {selectedMarket}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setSelectedMarket("NMS")}>
            NMS
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setSelectedMarket("ASX")}>
            ASX
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
