import React from "react";
import DeleteBlock from "./DeleteBlock";
import EditBlock from "./EditBlock";
import PinBlock from "./PinBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";
import CompleteBlock from "./CompleteBlock";

const TicketCard = ({ ticket }) => {
  const formatTimeStamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  // on touch we can do a popup that does something
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriorityDisplay priority={ticket.priority} />
        <div className="ml-auto flex align-middle">
          <div className="ml-auto mb-3 pr-2">
            <CompleteBlock id={ticket._id} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <PinBlock id={ticket._id} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <EditBlock id={ticket._id} />
          </div>
          <div className="ml-auto mb-3 pr-2">
            <DeleteBlock id={ticket._id} />
          </div>
        </div>
      </div>
      <h4>{ticket.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{formatTimeStamp(ticket.createdAt)}</p>
          <ProgressBar progress={ticket.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={ticket.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
