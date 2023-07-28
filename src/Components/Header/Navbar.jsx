import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { NavLinks } from "../../Assets/Data/Navigation";
import Cart from "./Card/Cart";
import User from "./User";
import MobileNav from "./MobileNav";


const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  });

  return (
    <div
      className={`${
        sticky ? "bg-white shadow-lg h-20" : " bg-submain h-20"
      } fixed top-0 left-0 flex items-center justify-between py-3 px-3 sm:px-6 w-full z-50`}
    >
       <MobileNav />
      <div className="text-xl">
        <a href="/">
          <img src="./images/Logo.png" alt="" className=" w-32 sm:w-40 h-6 cursor-pointer" />
        </a>
      </div>
      <div>
        <ul className="items-center hidden gap-6 lg:flex">
          {NavLinks.map((item, index) => {
            return (
              <li className="text-lg list-none cursor-pointer hover:text-green-700">
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  activeClass="active"
                >
                  {item.display}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-4 sm:gap-12">
        <Cart />
        <User />
      </div>
    </div>
  );
};

export default Navbar;
