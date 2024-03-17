import StockBoard from "../(components)/StockBoard";
import Nav from "../(components)/Nav";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/");
  return (
    <div className="flex h-screen max-h-screen bg-zinc-800">
      <Nav />
      <div className="flex-grow overflow-y-auto bg-cover bg-right bg-hero-pattern1 m-1.5 rounded-xl">
        <StockBoard />
      </div>
    </div>
  );
}
