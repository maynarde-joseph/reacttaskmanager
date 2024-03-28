"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Receipt } from "lucide-react";

import { Button } from "@/components/ui/button";

export const TradePopup = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-between gap-4 p-5 border">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center"
      >
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="STOCK" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="STOCK">STOCK</SelectItem>
            <SelectItem value="CRYPTO">CRYPTO</SelectItem>
            <SelectItem value="FOREX">FOREX</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Symbol" />
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="BUY" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="BUY">BUY</SelectItem>
            <SelectItem value="SELL">SELL</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Price"
          type="number"
          min="172.98"
          max="9999.99"
          step="0.50"
        />
        <Input
          placeholder="Quantity"
          type="number"
          min="1"
          max="600"
          step="1"
        />
        <Button type="submit">
          <Receipt className="mr-2 h-4 w-4" /> Make TRADE
        </Button>
      </form>
    </div>
  );
};
