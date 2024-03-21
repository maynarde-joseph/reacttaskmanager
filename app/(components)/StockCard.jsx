import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const StockCard = ({ ticket }) => {
  const ticketData = ticket;
  return (
    <Card className="flex flex-col rounded-md">
      <CardHeader>
        <CardTitle>{ticketData.stock_name}</CardTitle>
        {/* We can calculate this buy curr price - buy price */}
        <CardDescription>Change: -5.60(17.2%)</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Value: {ticketData.current_price}</p>
      </CardContent>
    </Card>
  );
};
export default StockCard;
