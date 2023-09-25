import React from "react";
import { Col, Container, Row } from "reactstrap";
import iphone from "../assets/images/iphone.png";
import smartphone from "../assets/images/smartphone.png";
import { Button } from "antd";
import { FaApple, FaGooglePlay } from "react-icons/fa";


const Download = () => {
  return (
    <Container
      className="w-full h-full px-3 mb-16 sm:px-12 md:px-8 lg:px-16"
      id="download"
    >
      <Row className="flex flex-col items-center mx-auto max-w-7xl sm:flex-row gap-y-6">
        <Col className="w-full sm:w-1/2"  data-aos="fade-right">
          <h1 className="text-2xl capitalize lg:text-4xl">
            Never feel hungry! <br />
            dowload our mobile app <br />
            and order for delicious meal
          </h1>
          <p className="w-full py-4 sm:w-11/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            praesentium tenetur blanditiis aperiam quidem eius laborum beatae
            tempora nostrum necessitatibus.
          </p>
           <Col className="flex items-center gap-4">
             <Button className="flex items-center h-10 gap-2 text-lg bg-white text-Text">
              <FaApple />
              <h6>iOS</h6>
            </Button>
             <Button className="flex items-center h-10 gap-2 text-lg bg-white text-Text">
             <FaGooglePlay />
             <h6>Andriod</h6>
            </Button>
           </Col>
        </Col>
        <Col className="flex items-center justify-center w-full sm:w-1/2"  data-aos="fade-left">
          <img src={iphone} alt="" className="object-contain h-72 sm:h-80 lg:h-96" />
          <img src={smartphone} alt="" className="object-contain h-72 sm:h-80 lg:h-96" />
        </Col>
      </Row>
    </Container>
  );
};

export default Download;
