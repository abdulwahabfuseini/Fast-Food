import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { NavLinks } from "../../assets/Data/Navigation";
import Cart from "./card/Cart";
import User from "./User";
import MobileNav from "./MobileNav";
import Logo from "../../assets/images/Logo.png";

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
      } fixed top-0 left-0 flex items-center justify-between py-3 px-4 sm:px-6 w-full z-50`}
    >
      <div className="text-xl">
        <img
          src={Logo}
          alt=""
          className="object-contain w-32 h-6 cursor-pointer sm:w-40"
        />
      </div>
      <div>
        <ul className="items-center hidden gap-6 lg:flex">
          {NavLinks.map((item, index) => {
            return (
              <li
                className="text-lg list-none cursor-pointer hover:text-green-700"
                key={index}
              >
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
      <div className="flex items-center gap-2 sm:gap-5">
        <Cart />
        <User />
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
