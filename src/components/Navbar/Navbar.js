import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "Shop", link: "/shop" },
    { id: 3, name: "Deals", link: "/deals" },
    { id: 4, name: "Contact", link: "/contact" },
    { id: 5, name: "About Us", link: "/aboutus" },
  ];
  return (
    <nav className="bg-indigo-200 ">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        
      </div>
      
      <ul className={`md:flex w-full md:static bg-indigo-200 justify-center absolute duration-700 ease-in  ${open ? 'top-6' : 'top-[-120px]'}`}>
        {links.map((link) => (
          <Link key={link.id} link={link}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
