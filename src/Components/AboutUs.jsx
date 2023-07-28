import React from "react";
import { Col, Container, Row } from "reactstrap";
import { AboutData } from "../Assets/Data/SlideData";

const AboutUs = () => {
  return (
    <Container className="w-full h-full lg:pt-10 px-3 sm:px-6 lg:px-16" id="about">
      <Row>
        {AboutData.map((item, index) => (
          <Row key={index} className="flex flex-col items-center gap-5 sm:gap-0 lg:flex-row">
            <Col className="w-full lg:w-1/2"  data-aos="fade-right">
              <header className="text-3xl capitalize sm:text-4xl md:text-5xl">{item.title}</header>
              <h1 className="py-2 text-2xl capitalize sm:text-3xl md:text-4xl">{item.subTitle}</h1>
              <p className="text-lg">{item.desc}</p>
              <div  className="grid grid-cols-2 gap-1 py-8 space-y-2 md:gap-3 sm:grid-cols-3 lg:grid-cols-2">
                 {
                  item.service.map((value, index) => (
                   <div key={index}>
                     <Col  data-aos="fade-up" className="flex flex-col items-center gap-2 md:gap-5 md:flex-row">
                       <img src={value.image} alt="" className="object-cover w-12 h-12 sm:w-16 sm:h-16"/>
                       <p className="text-lg capitalize">{value.name}</p>
                     </Col>
                   </div>
                  ))
                 }
              </div>
            </Col>
            <Col className="w-full lg:w-1/2 sm:p-16 lg:p-0"  data-aos="fade-left">
              <img src={item.image} alt="AboutImg" className="object-cover w-full h-96"/>
            </Col>
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default AboutUs;
