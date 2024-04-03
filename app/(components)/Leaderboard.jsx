"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import HeaderBar from "./HeaderBar";

// use real data or just this for "DEMO"
const leaderboardData = [
  {
    rank: 1,
    name: "Bobby Lee",
    profit: "500",
    prize: "51,112,925",
  },
  {
    rank: 2,
    name: "Bobby Li",
    profit: "400",
    prize: "112,925",
  },
  {
    rank: 3,
    name: "Bobby Ly",
    profit: "300",
    prize: "925",
  },
];

export const Leaderboard = () => {
  return (
    <div>
      <HeaderBar pageName="Leaderboard" />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Monthly leaderboard
        </h1>
        <p className="text-xl text-center mb-12">
          Do you find yourself lacking motivation sometimes? Heres a little
          something to help you push for the moon.
          <br />
          Every month the top three users will win cash prizes based on their
          monthly profits!
        </p>
        <div className="flex justify-center mb-8">
          <p className="px-4 py-2 rounded-md">Start trading now!</p>
          <Link href="/dashboard">
            <Button
              variant="outline"
              className="ml-4 px-6 py-2 rounded-md font-bold"
            >
              GO!
            </Button>
          </Link>
        </div>
        <Table>
          <TableCaption>Monthly leaderboard</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Profit</TableHead>
              <TableHead>Prize</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((data, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{data.rank}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.profit}</TableCell>
                <TableCell>{data.prize}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
