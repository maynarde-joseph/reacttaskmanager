"use client";
import React from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import HeaderBar from "./HeaderBar";

export const UserPortfolio = () => {
  const portfolioData = {
    cashBalance: "$527.55",
    gain: "+$177.09",
    return: "+12.20%",
    currentValue: "$1,624.71",
    startingValue: "Apr 30, 2020",
    netCashFlow: "$0.00",
    slices: [
      {
        name: "TSLA",
        amount: "20",
        value: "$1,624.71",
        gain: "+$177.09",
        return: "+12.20%",
      },
      {
        name: "AAPL",
        amount: "15",
        value: "$1,224.71",
        gain: "+$127.09",
        return: "+1.20%",
      },
    ],
    upcomingTrades: [],
  };

  return (
    <div>
      <HeaderBar pageName="Portfolio" />
      <div className="container mx-auto py-8 overflow-y-scroll h-screen">
        <div className="shadow-lg rounded-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">My Portfolio</h2>
            <div>
              <span className="text-lg font-bold">Coin balance</span>
              <span className="ml-4 text-lg">{portfolioData.cashBalance}</span>
            </div>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <span className="text-lg">Current value</span>
              <h3 className="text-3xl font-bold">
                {portfolioData.currentValue}
              </h3>
              <span className="text-lg">
                Starting value, {portfolioData.startingValue}
              </span>
            </div>
            <div>
              <span className="text-lg">Gain</span>
              <h3 className="text-3xl font-bold">{portfolioData.gain}</h3>
            </div>
            <div>
              <span className="text-lg">Return</span>
              <h3 className="text-3xl font-bold">{portfolioData.return}</h3>
            </div>
          </div>
          <div className="mb-8"></div>
          <div className="mb-8">
            <Collapsible defaultOpen>
              <div className="flex items-center space-x-4 px-4">
                <h3 className="text-xl font-bold">Holdings</h3>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Gain / Return</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {portfolioData.slices.map((slice, index) => (
                      <TableRow key={index}>
                        <TableCell>{slice.name}</TableCell>
                        <TableCell>{slice.amount}</TableCell>
                        <TableCell className="pr-0 mr-0">
                          {slice.value}
                        </TableCell>
                        <TableCell>
                          {slice.gain} / {slice.return}
                        </TableCell>
                        <TableCell className="p-0 m-0">
                          <Button variant="secondary">Liquidate</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div className="mb-8">
            <Collapsible defaultOpen>
              <div className="flex items-center space-x-4 px-4">
                <h3 className="text-xl font-bold">In process</h3>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Gain / Return</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {portfolioData.slices.map((slice, index) => (
                      <TableRow key={index}>
                        <TableCell>{slice.name}</TableCell>
                        <TableCell>{slice.amount}</TableCell>
                        <TableCell className="pr-0 mr-0">
                          {slice.value}
                        </TableCell>
                        <TableCell>
                          {slice.gain} / {slice.return}
                        </TableCell>
                        <TableCell className="p-0 m-0">
                          <Button variant="secondary">Abandon</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <div>
            <Collapsible defaultOpen>
              <div className="flex items-center space-x-4 px-4">
                <h3 className="text-xl font-bold">History</h3>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm" className="">
                    <ChevronsUpDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Gain / Return</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {portfolioData.slices.map((slice, index) => (
                      <TableRow key={index}>
                        <TableCell>{slice.name}</TableCell>
                        <TableCell>{slice.amount}</TableCell>
                        <TableCell className="pr-0 mr-0">
                          {slice.value}
                        </TableCell>
                        <TableCell>
                          {slice.gain} / {slice.return}
                        </TableCell>
                        <TableCell className="p-0 m-0">
                          <Button variant="secondary">More Info</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
};
