import React, { useState } from "react";
import { MenuOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { NavLinks } from "../../assets/Data/Navigation";
import { Link } from "react-scroll";
import { Drawer } from "antd";

const MobileNav = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <div className="lg:hidden">
      <div onClick={() => setOpenNav(true)}>
        <IconButton sx={{ color: "black" }}>
          <MenuOutlined sx={{ width: 32, height: 32 }} />
        </IconButton>
      </div>
      <Drawer
        className="absolute left-0 top-20"
        open={openNav}
        onClose={() => setOpenNav(false)}
        closable={false}
        contentWrapperStyle={{ width: "100%", height: 360 }}
      >
        <nav className="text-Red">
          <ul className="space-y-6">
            {NavLinks.map((item, index) => {
              return (
                <li
                  className="text-xl list-none hover:text-green-700"
                  key={index}
                >
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    activeClass="active"
                    onClick={() => setOpenNav(false)}
                  >
                    {item.display}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Drawer>
    </div>
  );
};

export default MobileNav;
