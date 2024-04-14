import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import HeaderBar from "./HeaderBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const GettingStarted = () => {
  return (
    <div>
      <HeaderBar pageName="Information Hub" />
      <div className="grid flex-1 items-start gap-4 p-4 sm:px-6 md:gap-8">
        <Tabs defaultValue="overview" className="pt-4">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="ticker">Trading Guides</TabsTrigger>
              <TabsTrigger value="contact">Contact Support</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="overview">
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Getting Started with Our Stock Trading App
                  </CardTitle>
                  <CardDescription>
                    Welcome to our stock trading app! This app allows you to
                    simulate stock trading using real-time market data. You can
                    add stocks to your watchlist, view stock information, and
                    perform buy and sell trades.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Ticker Graph</CardTitle>
                  <CardDescription>
                    The ticker graph on the dashboard displays the historical
                    price data for a selected stock. You can hover over the
                    graph to view the price at specific points in time. The
                    graph provides insights into the stocks performance over a
                    given period.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Stock Information</CardTitle>
                  <CardDescription>
                    The dashboard provides key information about each stock,
                    including:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 mb-4">
                    <li>
                      Latest Bid/Ask: The latest bid and ask prices for the
                      stock.
                    </li>
                    <li>Range: The days price range (low to high).</li>
                    <li>52W Range: The 52-week price range (low to high).</li>
                    <li>
                      Key Stats: Important statistics such as volume, average
                      volume, market cap, and price-to-book ratio.
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Adding Stocks to Watchlist</CardTitle>
                  <CardDescription>
                    To add a stock to your watchlist, click on the + button and
                    enter the stock symbol. The app will fetch the stock
                    information and add it to your watchlist. You can view and
                    manage your watched stocks in the watchlist section.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Trading Limitations</CardTitle>
                  <CardDescription>
                    Please note the following limitations of our stock trading
                    app:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 mb-4">
                    <li>
                      Due to limited API access, we can only provide the lowest
                      ask and highest bid prices for stocks.
                    </li>
                    <li>
                      The app does not support advanced features like order
                      queuing and partial fills.
                    </li>
                    <li>
                      The settlement time for trades has been set to 10 minutes
                      to allow for quick trading.
                    </li>
                    <li>
                      You cannot trade the same stock more than once every 30
                      minutes.
                    </li>
                    <li>Trading is not available when the market is closed.</li>
                  </ul>
                  <p>
                    We are continuously working on improving our app and plan to
                    add more features and functionality in the future, subject
                    to available funding and resources.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="ticker">
            <TabsContent value="ticker">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Introduction to Stock Trading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      A beginners guide to understanding the basics of stock
                      trading, including key concepts and terminology.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Source: Investing 101
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Analysis Strategies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Learn about popular technical analysis strategies and how
                      to apply them in your trading decisions.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Source: Trading Techniques
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management in Trading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Discover effective risk management techniques to protect
                      your capital and maximize your trading success.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Source: Trading Wisdom
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management in Trading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Discover effective risk management techniques to protect
                      your capital and maximize your trading success.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Source: Trading Wisdom
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management in Trading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Discover effective risk management techniques to protect
                      your capital and maximize your trading success.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Source: Trading Wisdom
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management in Trading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Discover effective risk management techniques to protect
                      your capital and maximize your trading success.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Source: Trading Wisdom
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management in Trading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Discover effective risk management techniques to protect
                      your capital and maximize your trading success.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Source: Trading Wisdom
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management in Trading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Discover effective risk management techniques to protect
                      your capital and maximize your trading success.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Source: Trading Wisdom
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management in Trading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Discover effective risk management techniques to protect
                      your capital and maximize your trading success.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Source: Trading Wisdom
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management in Trading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Discover effective risk management techniques to protect
                      your capital and maximize your trading success.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Source: Trading Wisdom
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management in Trading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Discover effective risk management techniques to protect
                      your capital and maximize your trading success.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Source: Trading Wisdom
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Management in Trading</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">
                      Discover effective risk management techniques to protect
                      your capital and maximize your trading success.
                    </p>
                    <p className="text-sm text-gray-500 mb-4">
                      Source: Trading Wisdom
                    </p>
                    <Button
                      variant="link"
                      className="text-blue-500 hover:underline"
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </TabsContent>
          <TabsContent value="contact">
            <div className="relative hidden flex-col items-start gap-8 md:flex">
              <form className="grid w-full items-start gap-6">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Message
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="content2">Title</Label>
                    <Textarea
                      id="content2"
                      placeholder="Type title here..."
                      className="min-h-[1rem]"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="role">Type</Label>
                    <Select defaultValue="system">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="system">Trade issue</SelectItem>
                        <SelectItem value="user">Account issue</SelectItem>
                        <SelectItem value="assistant">Report bug</SelectItem>
                        <SelectItem value="assistant2">
                          Something else...
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Type message here..."
                      className="min-h-[9.5rem]"
                    />
                  </div>
                  <Button className="w-40">Submit Complaint</Button>
                </fieldset>
              </form>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
