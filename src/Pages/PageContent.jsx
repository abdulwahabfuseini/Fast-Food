import React from "react";
import Navbar from "../Components/Header/Navbar";
import Hero from "../Components/Home/Hero"
import Popular from "../Components/Products/Popular";
import AboutUs from "../Components/AboutUs";
import Menu from "../Components/Menu/Menu";
import Review from "../Components/Review/Review";
import Contact from "../Components/Contact";
import BackToTop from "../Components/BackToTop";
import IconAppear from "../Components/IconAppear";
import Footer from "../Components/Footer";


const PageContent = () => {
  return (
    <div className="w-full h-full overflow-x-hidden bg-submain">
      <Navbar/>
      <Hero />
      <Popular />
      <AboutUs />
      <Menu />
      <Review />
      <Contact />
      <BackToTop />
      <IconAppear />
      <Footer />
    </div>
  );
};

export default PageContent;
