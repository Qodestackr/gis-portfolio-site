import { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const menuItems = [
  { path: "/", text: "Home" },
  { path: "/LocateMe", text: "Locate Me" },
  { path: "/login", text: "Login", button: true, className: "p-3 bg-green-600 hover:bg-green-500 rounded-lg" },
];

function Menu() {
  return (
    <>
      {menuItems.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`hover:bg-[#343A46] py-2 px-3 rounded-2xl ${item.button ? item.className : ""}`}
        >
          {item.text}
        </Link>
      ))}
    </>
  );
}

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`container flex items-center justify-between w-full px-4 py-4`}>
      <Link to="/" className="text-2xl font-black">
        GIS.Portfolio
      </Link>
      {/* menu */}
      <div className="hidden md:flex md:items-center md:justify-center md:space-x-4">
        <Menu />
      </div>
      {/* mobile menu icons */}
      <div className="z-10 inline-block md:hidden">
        {isNavOpen ? (
          <RiCloseLine color="white" size={30} onClick={toggleNavbar} />
        ) : (
          <RiMenuLine color="white" size={30} onClick={toggleNavbar} />
        )}
      </div>
      {/* mobile menu */}
      {isNavOpen && (
        <div className="flex absolute inset-0 w-full h-screen z-10 flex-col items-center justify-center bg-[#23272F] space-y-2">
          <Menu />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
