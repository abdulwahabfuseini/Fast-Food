import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import HungryMan from "../assets/images/SVG/hungryMan.webp"

const StartPage = () => {
  const navigate = useNavigate();

  const openLogin = () => {
    navigate("/signup", { replace: true });
  };
  return (
    <Container className="flex items-center justify-center w-full h-full px-3 bg-white ">
      <Row className="py-12 md:pt-40 lg:pt-24">
        <Col className="text-center shadow-md">
          <Col>
            <img
              src={HungryMan}
              alt="order"
              className="object-contain w-full h-96 lg:h-80"
            />
          </Col>
          <Col>
            <header className="my-2 text-xl">Are you Hungry!!!</header>
            <h1 className="text-lg">
             We are just a click away
            </h1>
            <button
              onClick={openLogin}
              className="px-4 py-2 my-6 font-medium text-white bg-green-800 border-2 rounded-lg text-md border-dry hover:ring-2 hover:bg-transparent hover:text-Text"
            >
              Order Some Food
            </button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default StartPage;
