"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectStock({ onSelect }) {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a stock" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>NASQAD</SelectLabel>
          <SelectItem value="AAPL">AAPL</SelectItem>
          <SelectItem value="AMZN">AMZN</SelectItem>
          <SelectItem value="TSLA">TSLA</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>ASX</SelectLabel>
          <SelectItem value="BHP.AX">BHP.AX</SelectItem>
          <SelectItem value="CBA.AX">CBA.AX</SelectItem>
          <SelectItem value="ANZ.AX">ANZ.AX</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
