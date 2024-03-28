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

export const UserStats = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex flex-col justify-between gap-4 p-5">
      <div>
        <h1 className="text-white text-lg">AAPL</h1>
      </div>
    </div>
  );
};
