import React, { useState } from "react";
import {   Close, MenuOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { NavLinks } from "../../Assets/Data/Navigation";
import { Link } from "react-scroll";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="lg:hidden">
      <div onClick={() => setOpenNav(!openNav)}>
        {openNav ? (
          
          <IconButton sx={{ color: "black" }}>
          <Close sx={{ width: 32, height: 32 }}/>
        </IconButton>
        ) : (
          <IconButton sx={{ color: "black" }}>
          <MenuOutlined sx={{ width: 32, height: 32 }}/>
        </IconButton>
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
