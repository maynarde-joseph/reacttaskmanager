import React from "react";
import DeleteBlock from "./DeleteBlock";
import PinBlock from "./PinBlock";
import DetailBlock from "./DetailBlock";
import InvestBlock from "./InvestBlock";
import LargestChange from "./LargestChange";

const TicketCard = ({ ticket, setTicketState, arrayId }) => {
  // on touch we can do a popup that does something
  const ticketData = JSON.parse(ticket);

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <h4>{ticketData.dataset_type.split("_")[0]}</h4>
        <div className="ml-auto flex align-middle">
          <div className="ml-auto mb-3 pr-2">
            <InvestBlock id={ticketData.dataset_type.split("_")[0]} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <PinBlock id={ticketData.dataset_type.split("_")[0]} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <LargestChange id={ticketData.dataset_type.split("_")[0]} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <DetailBlock id={ticketData.dataset_type.split("_")[0]} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <DeleteBlock
              arrayId={arrayId}
              id={ticketData.dataset_type.split("_")[0]}
              setTicketState={setTicketState}
            />
          </div>
        </div>
      </div>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        {ticketData.dataset_type.split("_")[0]}
      </p>
    </div>
  );
};

export default TicketCard;
