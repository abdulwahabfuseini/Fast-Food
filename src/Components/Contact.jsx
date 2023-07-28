import React from "react";
import { Col, Container, Row } from "reactstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Contact = () => {
  return (
    <Container
      className="w-full h-[1000px]   lg:h-screen  px-3 sm:px-6 lg:px-16"
      id="contact"
    >
      <header className="text-3xl text-center ">LOCATE US</header>
      <div className="flex flex-col-reverse gap-10 pt-8 lg:flex-row">
        <Row className="w-full lg:w-2/5">
          <Col>
            <h1 className="pb-2 text-xl font-bold">Visit our loaction</h1>
            <p className="text-lg">
              <h1>ADUM - KUMASI, PREMPEH II STREET</h1>
              <p>KUMASI - GHANA</p>
            </p>
          </Col>
          <Col className="my-8">
            <h1 className="pb-2 text-xl font-bold">Message Us</h1>
            <h1 className="text-lg">info@FastFood.com</h1>
            <span className="space-x-4 text-lg">
              <a href="tel:+233245264999">+233 24 526 4999</a>
              <a href="tel:+233245264999">+233 27 798 4606</a>
            </span>
          </Col>
          <Col>
            <h1 className="pb-2 text-lg font-bold">Follow Us</h1>
            <Col className="flex items-center gap-4 pt-2">
              <FaFacebookF className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1" />
              <FaTwitter className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1" />
              <FaLinkedin className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1" />
              <FaInstagram className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1" />
              <FaYoutube className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1" />
              <FaWhatsapp className="w-8 h-8 p-2 rounded-lg cursor-pointer sm:w-10 sm:h-10 bg-slate-200 hover:-translate-y-1" />
            </Col>
          </Col>
        </Row>
        <Row className="w-full lg:w-3/5">
          <Col>
            <iframe
              title=""
              height="400"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              className="w-full"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=PREMPEH%20II%20SECOND%20STREET%20+(FAST%20FOOD)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/population/">
                Calculate population in area
              </a>
            </iframe>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Contact;
