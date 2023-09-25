import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "reactstrap";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Badge, Drawer, Form, Button, Input, Checkbox } from "antd";
import EmptyCart from "../../../assets/images/SVG/home1.webp";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { cartActions } from "../../../store/cartSlice";
import TextArea from "antd/es/input/TextArea";
import { FaArrowRight } from "react-icons/fa";


const Cart = () => {
  const [openCart, setOPenCart] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const cartProducts = useSelector((state) => state.cart.itemsList);
  // const [Form] = Form.useForm();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const dispatch = useDispatch();

  const ClearCart = () => {
    dispatch(cartActions.ClearAllItems());
  };

  const onFinish = (values) => {
    dispatch(cartActions.ClearAllItems());
    setOpenForm(false);
    setOPenCart(false);
    setLoading(true);
    emailjs
      .send(
        "service_79g6vhp",
        "template_krdhrge",
        {
          name: form.name,
          email: form.email,
          phoneNumber: form.phoneNumber,
          address: form.address,
        },
        "q-ysc06-rKcviFVXK"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thanks for your order. Your food will be delivered to your doorstep as soon as possible. Have a nice day and Stay Bless!!!"
          );
          setForm();
        },
        (error) => {
          setLoading(false);
          alert("oops!!! Something went wrong");
        }
      );
  };

  let total = 0;
  const itemsLists = useSelector((state) => state.cart.itemsList);
  itemsLists.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <Container className="Relative">
      <Row onClick={() => setOPenCart(!openCart)} className="cursor-pointer ">
        <IconButton sx={{ color: "black" }}>
          <Badge count={cartProducts.length}>
            <ShoppingBagOutlined sx={{ width: 32, height: 32 }} />
          </Badge>
        </IconButton>
      </Row>
      <Drawer
        title="Your Food Cart"
        open={openCart}
        onClose={() => setOPenCart(false)}
        closable={true}
        contentWrapperStyle={{ width: 450 }}
      >
        {cartProducts.length === 0 && (
          <span className="flex flex-col items-center justify-center gap-10 leading-10">
            <h1 className="text-xl font-bold"> Your Cart Card is Empty </h1>
            <img
              src={EmptyCart}
              alt="order"
              className="object-contain w-full h-44 sm:h-80"
            />
            <Link
              to="menu"
              className="p-2 text-lg text-white bg-green-400 rounded-lg"
              onClick={() => setOPenCart(false)}
            >
              Order Some Food
            </Link>
          </span>
        )}
        {openForm ? (
          <>
            <Form
              onFinish={onFinish}
              // form={Form}
              name="normal_form"
              initialValues={{ remember: true }}
              layout="vertical"
              className=" sm:px-2 md:px-4 overflow-y-scroll md:overflow-y-scroll h-screen sm:h-[600px] md:h-full"
            >
              <header className="py-3 text-lg">
                Provide Your Details To Accept Order
              </header>
              <Form.Item
                name="name"
                label="Full Name"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Full Nmae",
                  },
                  { type: "name" },
                ]}
                hasFeedback
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  className="h-10 cursor-pointer"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email Address"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Email Address",
                  },
                  { type: "email" },
                ]}
                hasFeedback
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Eg: myname@gmail.com"
                  className="h-10 cursor-pointer"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item
                name="phoneNumber"
                label="Phone Number"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Phone Number",
                  },
                  { type: "tel" },
                ]}
                hasFeedback
              >
                <Input
                  type="number"
                  name="number"
                  placeholder="(000) 000 000 0000"
                  className="h-10 cursor-pointer"
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item label="Select Payment Method" className="mb-5">
                <Checkbox name="momo" onChange={handleChange}>
                  <h1 className="text-md">Momo</h1>
                </Checkbox>
                <Checkbox name="cash">
                  <h1 className="text-md">Cash</h1>
                </Checkbox>
                <Checkbox>
                  <h1 className="text-md">Payment After Delivery</h1>
                </Checkbox>
              </Form.Item>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  {
                    required: true,
                    message: "Please Enter Address",
                  },
                  { type: "text" },
                ]}
                hasFeedback
              >
                <TextArea
                  type="text"
                  name="address"
                  placeholder="Please Enter Address"
                  onChange={handleChange}
                />
              </Form.Item>
              <Button
                htmlType="submit"
                className="w-full h-10 bg-blue-600"
                type="primary"
              >
                Submit
              </Button>
              <p className="pt-10">
                TOTAL AMOUNT = <span className="font-bold"> ${total}.00</span>
              </p>
            </Form>
          </>
        ) : (
          <>
            <Row className="">
              <Col className="">
                {cartProducts.map((CartProduct, index) => {
                  return (
                    <CartItems
                      key={index}
                      id={CartProduct.id}
                      name={CartProduct.name}
                      cover={CartProduct.cover}
                      price={CartProduct.price}
                      totalPrice={CartProduct.totalPrice}
                      quantity={CartProduct.quantity}
                    />
                  );
                })}
              </Col>
            </Row>
          </>
        )}

        {openForm ? (
          ""
        ) : (
          <Col
            className={`${
              cartProducts.length === 0
                ? "hidden"
                : "fixed bottom-0 right-0  py-3 px-4 mt-2  w-full sm:w-[450px] z-20 bg-white text-black border-t-2 leading-10"
            }`}
          >
            <Col className="flex items-center justify-between text-lg font-bold">
              <h4>Subtotal</h4>
              <p>${total}.00</p>
            </Col>
            <Button
              disabled={loading}
              onClick={() => setOpenForm(true)}
              className="w-full h-12 text-lg text-center text-white bg-green-500"
            >
              Proceed for Checkout
            </Button>
            <Col className="flex items-center justify-between pt-2">
              <Button
                onClick={ClearCart}
                className="h-10 text-white bg-red-600"
              >
                Clear Cart
              </Button>
              <Link to="menu" onClick={() => setOPenCart(false)}>
                <button className="flex items-center justify-center w-full gap-2 pt-2 text-base">
                  or <span className="text-green-600 ">Continue Shopping </span>
                  <FaArrowRight className="text-green-700" />
                </button>
              </Link>
            </Col>
          </Col>
        )}
      </Drawer>
    </Container>
  );
};

export default Cart;
