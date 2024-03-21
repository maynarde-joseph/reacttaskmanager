import React from "react";
import DeleteBlock from "./DeleteBlock";
import PinBlock from "./PinBlock";
import DetailBlock from "./DetailBlock";
import InvestBlock from "./InvestBlock";
import LargestChange from "./LargestChange";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TicketCard = ({ ticket }) => {
  // on touch we can do a popup that does something
  const ticketData = ticket;
  return (
    <Card className="flex flex-col rounded-md shadow-lg p-3 m-1 pt-0 pb-0 mb-0 mt-0">
      <CardHeader>
        <div className="flex">
          <CardTitle>{ticketData.stock_name}</CardTitle>
          <div className="ml-auto flex align-middle">
            <div className="ml-auto pr-2">
              <InvestBlock id={ticketData.stock_name} />
            </div>
            <div className="ml-auto pr-2">
              <PinBlock id={ticketData.stock_name} />
            </div>
            <div className="ml-auto pr-2">
              <LargestChange
                id={ticketData.stock_name}
                valueX={ticketData.current_price}
              />
            </div>
            <div className="ml-auto pr-2">
              <DetailBlock id={ticketData.stock_name} />
            </div>
            <div className="ml-auto pr-2">
              <DeleteBlock id={ticketData.stock_name} />
            </div>
          </div>
        </div>
        <CardDescription>Change: -5.60(17.2%)</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Last: {ticketData.current_price}</p>
      </CardContent>
    </Card>
  );
};

export default TicketCard;
