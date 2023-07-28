import React from "react";
import { Col, Container, Row } from "reactstrap";
import { HomeData } from "../../Assets/Data/SlideData";
import HomeContent from "./HomeContent";

const Hero = () => {
  return (
    <Container className="w-full h-full px-3 py-32 sm:px-6 lg:px-8" id="hero">
      <Row>
        <Col>
          {HomeData.map((items, index) => {
            return (
              <HomeContent
                key={index}
                id={items.id}
                title={items.title}
                mainTitle={items.mainTitle}
                subTitle={items.subTitle}
                desc={items.desc}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
