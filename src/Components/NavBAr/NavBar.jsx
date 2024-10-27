import { useState } from "react";
import Link from "../Link/Link";

import { AiOutlineAlignLeft, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  return (
    <nav className="text-white p-6">
      <div onClick={() => setOpen(!open)} className="btn md:hidden text-2xl">
        {open === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineAlignLeft></AiOutlineAlignLeft>
        )}
      </div>
      <ul
        className={`md:flex gap-6 duration-1000 absolute md:static
        ${open ? "top-20" : "-top-60"}
        bg-slate-500 px-6 shadow-lg rounded-xl`}
      >
        {routes.map((route, idx) => (
          <Link key={idx} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
