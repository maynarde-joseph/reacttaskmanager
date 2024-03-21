import Nav from "./Nav";

export default function NavWrap({ children }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Nav />
      <div className="overflow-hidden flex-grow">{children}</div>
    </div>
  );
}
