import { Rate, message } from "antd";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { cartActions } from "../../store/cartSlice";

const MenuItems = ({id, cover, name, price}) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(cartActions.addToCart({id, name, price, cover}))
    message.success("Food successfully added to cart")
  }

  return (
    <Container>
      <Row>
        <img src={cover} alt="" className="w-full h-32 sm:h-52 " />
        <h1 className="py-1 text-lg font-bold text-center sm:py-3">{name}</h1>
        <Col>
          <Rate defaultValue={4}/>
        </Col>
        <Col className="flex items-center justify-between px-3 py-2 sm:py-5 sm:px-6">
          <h5 className="font-bold text-yellow-400 sm:text-xl">${price}.00</h5>
          <button onClick={addToCart}>
            <FaPlus className="w-8 h-8 p-2 font-bold text-white bg-yellow-400" />
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuItems;
