import { SquarePen } from "lucide-react";
import { BellDot } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen((prev) => !prev);
  };
  return (
    /* container ml-20 sm:px-6 md:px-10 py-6 flex */
    <header className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-6 flex flex-wrap items-center justify-between">
      <div className="flex justify-between gap-x-3">
        <h1 className="text-4xl font-bold mb-2 "> News Bulletin </h1>
        <div className="text-4xl"> | </div>
      </div>
      <div className="hidden lg:flex items-center gap-x-6 text-2xl">
        <h2> Stories </h2>
        <h2> Community </h2>
        <h2> Subscribe </h2>
      </div>
      <div className="hidden lg:flex items-center gap-x-6 text-xl">
        <SquarePen />
        <h2> Write </h2>
      </div>
      <div className="hidden lg:flex items-center gap-x-6 text-xl">
        <BellDot />
        <CircleUserRound />
      </div>
      <div className="lg:hidden md:flex flex-col justify-end z-30">
        <button onClick={toggleNavbar}>
          {mobileDrawerOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileDrawerOpen && (
        <div className=" fixed inset-0 z-20 flex flex-col justify-center items-center lg:hidden">
          <h2> Stories </h2>
          <h2> Community </h2>
          <h2> Subscribe </h2>
        </div>
      )}
    </header>
  );
}

export default Header;
