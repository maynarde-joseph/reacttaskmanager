import Nav from "./Nav";
import Temp2 from "./temp";

export default function NavWrap({ children }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Nav />
      <div className="flex flex-col flex-grow">
        <main className="flex-grow overflow-auto">{children}</main>
      </div>
    </div>
  );
}
