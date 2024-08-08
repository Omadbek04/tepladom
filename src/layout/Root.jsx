import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../components";

function Root() {
  return (
    <div className=" flex flex-col h-screen ">
      <header className=" sm:my-[30px] my-[13px]">
        <Navbar />
      </header>
      <main className=" flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
export default Root;
