import React from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { cartActions } from "../../../store/cartSlice";
import { message } from "antd";

const CartItems = ({id,  name, cover, price, quantity, totalPrice }) => {
  const dispatch = useDispatch()
  
  // ====== increase item ==== 
  const inCartItem = () => {
    dispatch(cartActions.addToCart({id, name, cover, price}))
  }

  // ==== Decrease item or remove item ======= 
  const DesCartItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };

  
  // ==== Delete item ====== 
  const DeleteItem = () => {
    dispatch(cartActions.deleteFromCart(id))
    message.success("Food deleted from cart")
  }

  return (
    <Container>
      <Row className="flex items-center justify-between pb-1 my-2 border-b-2 border-b-green-200">
        <Col>
          <img src={cover} alt="" className="h-24 p-2 border-2 w-28" />
        </Col>
        <Col className="text-center">
          <p className="text-lg">{name}</p>
          <h2>Unit Price: ${price}.00</h2>
          <Col className="flex items-center justify-center gap-2">
            <button onClick={inCartItem}>
              <FaPlus className="p-1 text-lg font-bold text-white bg-Text" />
            </button>
            <button className="font-bold">{quantity}</button>
            <button onClick={DesCartItem}>
              <FaMinus className="p-1 text-lg font-bold text-white bg-Text" />
            </button>
          </Col>
        </Col>
        <Col className="flex flex-col items-center gap-4">
          <button onClick={DeleteItem} >
            <FaTrashAlt />
          </button>
          <p className="text-lg ">${totalPrice}.00</p>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItems;
