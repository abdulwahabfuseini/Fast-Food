import React from "react";
import Navbar from "../components/header/Navbar";
import Hero from "../components/home/Hero"
import Popular from "../components/products/Popular";
import AboutUs from "../components/AboutUs";
import Menu from "../components/menu/Menu";
import Review from "../components/review/Review";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
import IconAppear from "../components/IconAppear";
import Footer from "../components/Footer";
import Reserve from "../components/reserveTable/Reserve";
import Download from "../components/Download";



const PageContent = () => {
  return (
    <div className="w-full h-full overflow-x-hidden bg-submain">
      <Navbar/>
      <Hero />
      <Popular />
      <AboutUs />
      <Reserve />
      <Menu />
      <Review />
      <Download />
      <Contact />
      <BackToTop />
      <IconAppear />
      <Footer />
    </div>
  );
};

export default PageContent;
