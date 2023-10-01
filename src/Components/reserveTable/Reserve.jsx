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
      className="w-full h-full px-3 py-20 md:py-12 sm:px-6 lg:px-12"
      id="reserve"
    >
      <Row className="flex flex-col items-center max-w-6xl mx-auto sm:flex-row gap-y-6">
        <Col data-aos="fade-right" className="w-full sm:w-1/2">
          <h1 className="text-2xl capitalize sm:text-3xl lg:text-5xl">
            do you have any dinner <br />
            plan today? reserve <br />
            your table
          </h1>
          <p className="w-full py-4 sm:w-10/12">
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
        <Col data-aos="fade-left" className="w-full sm:w-1/2">
          <img src={reserved} alt="table" className="object-contain" />
        </Col>
      </Row>
    </Container>
  );
};

export default Reserve;
