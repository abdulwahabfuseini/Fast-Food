import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLinks } from "../../Assets/Data/Navigation";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="lg:hidden">
      <div onClick={() => setOpenNav(!openNav)}>
        {openNav ? (
          <FaTimes className="w-6 h-6 cursor-pointer sm:w-8 sm:h-8" />
        ) : (
          <FaBars className="w-6 h-6 cursor-pointer sm:w-8 sm:h-8" />
        )}
      </div>
      <div
        className={`${
          openNav ? "-right-0" : "-right-full"
        } top-20 sm:top-20 bg-white shadow-xl w-full py-6 px-6  h-80 fixed transition-all duration-300`}
      >
        <ul className="space-y-4">
          {NavLinks.map((item, index) => {
            return (
              <li className="text-xl list-none hover:text-green-700">
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-50}
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
    </div>
  );
};

export default MobileNav;
