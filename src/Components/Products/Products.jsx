import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { FaRegHeart, FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Products = ({ name, price, cover, desc }) => {
  const [fill, setFill] = useState(null);

  return (
    <Container>
      <Row  className="mb-2 shadow-md bg-dry">
        <img src={cover} alt="" className="w-full h-40 lg:h-48" />
        <p className="py-3 text-lg text-center">{name}</p>
       <Col className="px-2">
       <Col className="flex items-center justify-center gap-2 text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <FaStarHalfAlt />
        </Col>
        <p className="py-2 text-center truncate">{desc}</p>
        <Col className="flex items-center justify-between px-6 py-3">
          <h5 className="text-xl font-bold text-yellow-400">${price}.00</h5>
          <button onClick={() => setFill(!fill)}>
            {fill ? (
              <FaHeart className="w-6 h-6 font-bold text-red-400" />
            ) : (
              <FaRegHeart className="w-6 h-6 font-bold text-red-400" />
            )}
          </button>
        </Col>
       </Col>
        
      </Row>
    </Container>
  );
};

export default Products;
