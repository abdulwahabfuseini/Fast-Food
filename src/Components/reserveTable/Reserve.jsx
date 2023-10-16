import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { Button, Modal } from "antd";
import ReserveForm from "./ReserveForm";
import reserved from "../../assets/images/SVG/table.webp";

const Reserve = () => {
  const [book, setBook] = useState(false);

  const handleClickOpen = () => {
    setBook(true);
  };



  return (
    <Container
      className="w-full h-full px-3 py-20 md:py-16 sm:px-6 lg:px-12"
      id="reserve"
    >
      <Row className="grid sm:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-10 lg:gap-x-20 max-w-7xl mx-auto">
      <Col data-aos="fade-right" className="w-full lg:col-span-2 order-2 sm:order-1">
          <img src={reserved} alt="table" className="object-contain w-full h-full" />
        </Col>
        <Col data-aos="fade-left" className="w-full lg:col-span-3 order-1 sm:order-2">
          <h1 className="text-2xl capitalize sm:text-3xl lg:text-5xl">
            do you have any dinner <br />
            plan today? reserve <br />
            your table
          </h1>
          <p className="w-full py-4  break-all text-lg lg:w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            praesentium tenetur blanditiis aperiam quidem eius laborum beatae
            tempora nostrum necessitatibus.
          </p>

          <Button
            onClick={handleClickOpen}
            className="h-10 text-lg text-white bg-yellow-400"
          >
            Reserve a table
          </Button>
          {book && (
            <Modal
              title="Provide your details to reserve a table"
              open={book}
              onOk={() => setBook(false)}
              onCancel={() => setBook(false)}
              footer={[]}
            >
              <ReserveForm />
            </Modal>
          )}
        </Col>
       
      </Row>
    </Container>
  );
};

export default Reserve;
