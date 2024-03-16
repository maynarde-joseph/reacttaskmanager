"use client";
import React from "react";
import TicketCard from "./TicketCard";
import NewTask from "./NewTask";
import SearchBar from "./SearchBar";
import { useState } from "react";

const StockBoard = () => {
  const [tickets, setTickets] = useState([]);

  return (
    <div className="p-5">
      <div className="flex flex-col pl-2">
        <div className="flex flex-row gap-4">
          <h3 className="text-white">Your stocks</h3>
          <NewTask />
          <SearchBar setTicketState={[tickets, setTickets]} />
        </div>
      </div>
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        {tickets.map((ticket, index) => (
          <TicketCard
            id={index}
            key={index}
            ticket={ticket}
            setTicketState={[tickets, setTickets]}
          />
        ))}
      </div>
    </div>
  );
};

export default StockBoard;
