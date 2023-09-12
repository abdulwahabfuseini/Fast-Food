import React from "react";
import { Col, Row } from "reactstrap";
import { FooterLinks } from "../assets/Data/Navigation";
import Background from "../assets/images/SVG/Slide1.jpg";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="relative w-full h-[800px]  sm:h-[700px] lg:h-[500px]">
      <Row>
        <img
          src={Background}
          alt="FootBg"
          className="object-cover w-full h-[800px]  sm:h-[700px] lg:h-[500px]"
        />
      </Row>
      <Row className="absolute top-0 left-0 w-full h-[800px]  sm:h-[700px] lg:h-[500px] py-8 text-white px-2 sm:px-20 md:px-6 lg:px-40 bg-transparents">
        <Col className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 place-items-center">
          {FooterLinks.map((footer, index) => {
            return (
              <Col key={index}>
                <header className="my-5 text-xl text-white sm:text-2xl">
                  {footer.title}
                </header>
                <span className="space-y-3">
                  {footer.Links.map((link, index) => {
                    const { display, id, location, street, tel, phone, email } =
                      link;
                    return (
                      <ul key={index}>
                        <li
                          className="text-lg list-none cursor-pointer hover:text-green-700"
                        >
                          <Link
                            to={id}
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={500}
                            activeClass="active"
                          >
                            {display}
                          </Link>
                        </li>
                        <li className="text-md">{location}</li>
                        <li className="text-md">{street}</li>
                        <li className="text-md">
                          <a href={`Tel:${tel}`}>{tel}</a>
                          <a href={`mailto:${email}`}>{email}</a>
                          <a href={`Tel:${phone}`}>{phone}</a>
                        </li>
                      </ul>
                    );
                  })}
                </span>
                <span className="flex flex-wrap gap-4">
                  {footer.Links.map((connect, index) => {
                    return (
                      <Col key={index}>
                        <img
                          src={connect.media}
                          alt=""
                          className="w-8 sm:w-8"
                        />
                      </Col>
                    );
                  })}
                </span>
              </Col>
            );
          })}
        </Col>
        <h1 className="flex flex-wrap items-center justify-center gap-4 py-10 text-lg sm:text-xl">
          ALL RIGHT REVERVE <span>&copy; 2023</span>
          <span>
            {" "}
            <img
              src={Logo}
              alt=""
              className="object-contain h-5 w-80 sm:h-10"
            />
          </span>{" "}
        </h1>
        <header className="text-lg font-bold text-center text-white">
          Created By: F.A.W
        </header>
      </Row>
    </footer>
  );
};

export default Footer;
