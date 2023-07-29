import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import HungryMan from "../Assets/images/SVG/hungryMan.webp"

const StartPage = () => {
  const navigate = useNavigate();

  const openLogin = () => {
    navigate("/login", { replace: true });
  };
  return (
    <Container className="w-full h-full px-3 bg-white">
      <Row className="flex flex-col items-center justify-center py-12 md:p-40 lg:pt-24">
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
              className="px-4 py-2 my-6 text-lg font-medium text-white bg-green-800 border-2 rounded-lg border-dry hover:ring-4 hover:bg-transparent hover:text-Text"
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
