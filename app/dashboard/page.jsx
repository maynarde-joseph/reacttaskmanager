import StockBoard from "../(components)/StockBoard";
import Nav from "../(components)/Nav";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { StockCard } from "../(components)/StockCard";
import { UserStats } from "../(components)/UserStats";
import StockTable from "../(components)/StockTable";
import { RecentTrades } from "../(components)/RecentTrades";
import StockTicker from "../(components)/StockTicker";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");

  return (
    <div className="flex flex-col h-screen">
      <div className="h-1/6">
        <UserStats />
      </div>
      <div className="flex-grow flex flex-row h-5/6">
        <div className="overflow-y-scroll flex-grow h-screen">
          <StockTable />
        </div>
        <StockTicker />
        {/* <div className="h-screen">
          <RecentTrades />
        </div> */}
      </div>
    </div>
  );
}
