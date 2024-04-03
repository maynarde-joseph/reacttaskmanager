"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilePlus, FileMinus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useSession } from "next-auth/react";

const getMarketStatus = async () => {
  const response = await fetch(`api/status`);
  if (response.ok) {
    const { data } = await response.json();
    return data;
  } else {
    console.error("Error:", response.status);
  }
};

export function TradePopup({ mainStock }) {
  const [selectedOption, setSelectedOption] = useState("Buy");
  const [marketStatus, setMarketStatus] = useState(null);
  const [quantity, setQuantity] = useState("");
  const { data: session, status, update } = useSession();

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleConfirm = () => {
    const parsedQuantity = parseInt(quantity);
    if (parsedQuantity > 0) {
      const tradeDetails = {
        stock: mainStock.symbol,
        amount: parsedQuantity,
        buy_date: new Date(),
        sell_date: null,
        stock_value: selectedOption === "Buy" ? mainStock.ask : mainStock.bid,
        currency: "USD",
      };

      let tempInvestments = session?.user.curr_inv || [];
      tempInvestments.push(tradeDetails);
      update({ curr_inv: tempInvestments });

      // Reset form fields and close the dialog
      setSelectedOption("Buy");
      setQuantity("");
    }
  };

  useEffect(() => {
    const fetchMarketStatus = async () => {
      const data = await getMarketStatus();
      setMarketStatus(data);
    };

    fetchMarketStatus();
  }, []);

  const isMarketClosed = marketStatus?.markets[1].current_status === "closed";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Make Trade</CardTitle>
        <CardDescription>
          Based on real-time data, simulate a new trade.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup
          defaultValue="Buy"
          className="grid grid-cols-2 gap-4"
          onValueChange={setSelectedOption}
        >
          <div>
            <RadioGroupItem value="Buy" id="Buy" className="peer sr-only" />
            <Label
              htmlFor="Buy"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <FilePlus className="mb-3 h-6 w-6" />
              Buy
            </Label>
          </div>
          <div>
            <RadioGroupItem value="Sell" id="Sell" className="peer sr-only" />
            <Label
              htmlFor="Sell"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
            >
              <FileMinus className="mb-3 h-6 w-6" />
              Sell
            </Label>
          </div>
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              className="w-full"
              disabled={!mainStock || isMarketClosed}
            >
              {mainStock ? (
                isMarketClosed ? (
                  "Market Closed"
                ) : (
                  "Continue"
                )
              ) : (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </>
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Confirm Trade</DialogTitle>
              <DialogDescription>
                Please confirm your trade details.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <Label htmlFor="stock">Stock:</Label>
                <span>{mainStock?.symbol}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Label htmlFor="action">Action:</Label>
                <span>{selectedOption}</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Label htmlFor="price">
                  {selectedOption === "Buy" ? "Bid Price:" : "Ask Price:"}
                </Label>
                <span>
                  {selectedOption === "Buy" ? mainStock?.bid : mainStock?.ask}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Label htmlFor="size">
                  {selectedOption === "Buy" ? "Bid Size:" : "Ask Size:"}
                </Label>
                <span>
                  {selectedOption === "Buy"
                    ? mainStock?.bidSize
                    : mainStock?.askSize}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Label htmlFor="quantity">Quantity:</Label>
                <Input
                  type="number"
                  id="quantity"
                  value={quantity}
                  onChange={handleQuantityChange}
                  min={1}
                  max={
                    selectedOption === "Buy"
                      ? mainStock?.bidSize
                      : mainStock?.askSize
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button variant="default">Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
