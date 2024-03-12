import React from "react";
import DeleteBlock from "./DeleteBlock";
import PinBlock from "./PinBlock";
import DetailBlock from "./DetailBlock";
import InvestBlock from "./InvestBlock";

const TicketCard = ({ ticket }) => {
  // on touch we can do a popup that does something
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        {/* <PriorityDisplay priority={ticket.priority} /> */}
        <h4>{ticket.dataset_type.split("_")[0]}</h4>
        <div className="ml-auto flex align-middle">
          <div className="ml-auto mb-3 pr-2">
            <InvestBlock id={ticket.dataset_id} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <PinBlock id={ticket.dataset_id} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <DetailBlock id={ticket.dataset_id} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <DeleteBlock id={ticket.dataset_id} />
          </div>
        </div>
      </div>
      {/* <h4>{ticket.title}</h4> */}
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket.dataset_id}</p>
      {/* <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{formatTimeStamp(ticket.createdAt)}</p>
          <ProgressBar progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={ticket.status} />
        </div>
      </div> */}
    </div>
  );
};

export default TicketCard;
