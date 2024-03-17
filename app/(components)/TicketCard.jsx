import React from "react";
import DeleteBlock from "./DeleteBlock";
import PinBlock from "./PinBlock";
import DetailBlock from "./DetailBlock";
import InvestBlock from "./InvestBlock";
import LargestChange from "./LargestChange";

const TicketCard = ({ ticket, setTicketState, arrayId, db_id }) => {
  // on touch we can do a popup that does something
  const ticketData = ticket;
  return (
    <div className="flex flex-col bg-zinc-800 hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <h4>{ticketData.stock_name}</h4>
        <div className="ml-auto flex align-middle">
          <div className="ml-auto mb-3 pr-2">
            <InvestBlock id={ticketData.stock_name} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <PinBlock id={ticketData.stock_name} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <LargestChange
              id={ticketData.stock_name}
              valueX={ticketData.current_price}
            />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <DetailBlock id={ticketData.stock_name} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <DeleteBlock
              arrayId={arrayId}
              id={ticketData.stock_name}
              setTicketState={setTicketState}
              db_id={db_id}
            />
          </div>
        </div>
      </div>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        Current value: {ticketData.current_price}
      </p>
    </div>
  );
};

export default TicketCard;
