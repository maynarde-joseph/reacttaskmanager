import React from "react";
import TicketCard from "./(components)/TicketCard";
import NewTask from "./(components)/NewTask";
import SearchBar from "./(components)/SearchBar";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

const Dashboard = async () => {
  // const data = await getTickets();

  // Make sure we have tickets needed for production build.
  // if (!data?.tickets) {
  //   return <p>No tickets.</p>;
  // }

  // const tickets = data.tickets;
  const tickets = [];
  // const uniqueCategories = [
  //   ...new Set(tickets?.map(({ category }) => category)),
  // ];

  return (
    <div className="p-5">
      <div className="flex flex-col pl-2">
        <div className="flex flex-row gap-4">
          <h3 className="text-white">Your stocks</h3>
          <NewTask />
          <SearchBar />
        </div>
      </div>
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        {tickets.map((ticket, index) => (
          <TicketCard id={index} key={index} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
