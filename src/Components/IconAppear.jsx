import React, { useEffect, useState } from "react";
import footchef from "../assets/images/CHEF/footchef2.png"

const IconAppear = () => {
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 300 ? setAppear(true) : setAppear(false);
    });
  });

  return (
    appear && (
      <img
        src={footchef}
        className="fixed z-20 object-cover w-20 transition-all duration-500 cursor-pointer md:w-40 -bottom-20 md:-bottom-40 left-3 md:left-2 hover:bottom-0 hover:translate-x-8"
        alt="icon"
      />
    )
  );
};

export default IconAppear;
