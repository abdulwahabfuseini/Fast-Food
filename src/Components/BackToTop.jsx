import React, { useEffect, useState } from "react";
import { CgChevronDoubleUp } from "react-icons/cg";
import { animateScroll as scroll } from "react-scroll";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 500 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
      show && (
      <button
        onClick={() => scrollToTop()}
        className="fixed bottom-14 right-14 rounded-full z-30 bg-white border-2 border-Header p-2 font-bold shadow-lg transition-all duration-200 hover:ring-4 hover:ring-green-100"
      >
        <CgChevronDoubleUp className="w-8 h-8" />
      </button>
      )
  );
};

export default BackToTop;
