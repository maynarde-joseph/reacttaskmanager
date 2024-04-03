import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import HeaderBar from "./HeaderBar";

export const GettingStarted = () => {
  return (
    <div>
      <HeaderBar pageName="Information" />
      <div className="container mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started with Our Stock Trading App</CardTitle>
          </CardHeader>
          <CardContent>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="mb-4">
              Welcome to our stock trading app! This app allows you to simulate
              stock trading using real-time market data. You can add stocks to
              your watchlist, view stock information, and perform buy and sell
              trades.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-bold mb-4">Ticker Graph</h2>
            <p className="mb-4">
              The ticker graph on the dashboard displays the historical price
              data for a selected stock. You can hover over the graph to view
              the price at specific points in time. The graph provides insights
              into the stocks performance over a given period.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-bold mb-4">Stock Information</h2>
            <p className="mb-4">
              The dashboard provides key information about each stock,
              including:
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Field</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Latest Bid/Ask</TableCell>
                  <TableCell>
                    The latest bid and ask prices for the stock.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Range</TableCell>
                  <TableCell>The days price range (low to high).</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>52W Range</TableCell>
                  <TableCell>The 52-week price range (low to high).</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Key Stats</TableCell>
                  <TableCell>
                    Important statistics such as volume, average volume, market
                    cap, and price-to-book ratio.
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Separator className="my-6" />

            <h2 className="text-2xl font-bold mb-4">
              Adding Stocks to Watchlist
            </h2>
            <p className="mb-4">
              To add a stock to your watchlist, click on the + button and enter
              the stock symbol. The app will fetch the stock information and add
              it to your watchlist. You can view and manage your watched stocks
              in the watchlist section.
            </p>

            <Separator className="my-6" />

            <h2 className="text-2xl font-bold mb-4">Trading Limitations</h2>
            <p className="mb-4">
              Please note the following limitations of our stock trading app:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Due to limited API access, we can only provide the lowest ask
                and highest bid prices for stocks.
              </li>
              <li>
                The app does not support advanced features like order queuing
                and partial fills.
              </li>
              <li>
                The settlement time for trades has been set to 10 minutes to
                allow for quick trading.
              </li>
              <li>
                You cannot trade the same stock more than once every 30 minutes.
              </li>
              <li>Trading is not available when the market is closed.</li>
            </ul>
            <p className="mb-4">
              We are continuously working on improving our app and plan to add
              more features and functionality in the future, subject to
              available funding and resources.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
