import React from "react";
import { Col, Container, Row } from "reactstrap";
import { HomeData } from "../../assets/Data/SlideData";
import HomeContent from "./HomeContent";

const Hero = () => {
  return (
    <Container className="grid w-full h-full px-3 py-32 sm:px-4" id="home">
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
