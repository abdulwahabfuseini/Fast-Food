import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Socialconnect } from "../assets/Data/SlideData";
import { Tooltip } from "antd";

const Contact = () => {
  return (
    <Container
      className="w-full h-[1000px]   lg:h-screen  px-3 sm:px-6 lg:px-16"
      id="contact"
    >
      <header className="text-3xl text-center ">LOCATE US</header>
      <div className="flex flex-col-reverse gap-10 pt-8 lg:flex-row" data-aos="fade-right">
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
            <Col className="flex items-center gap-2 pt-3">
              {Socialconnect.map((media) => (
                <Col key={media.id}>
                  <Tooltip color={media?.color} title={media?.title} key={media.id}>
                    <a
                      href={media?.link}
                      target="blank"
                    >
                      {media.icon}
                    </a>
                  </Tooltip>
                </Col>
              ))}
            </Col>
          </Col>
        </Row>
        <Row className="w-full lg:w-3/5" data-aos="fade-left">
          <Col>
            <iframe
              title="locate us"
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
