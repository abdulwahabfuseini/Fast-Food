import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "reactstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Badge, Drawer, Form, message, Button, Input, Checkbox } from "antd";

import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import { cartActions } from "../../../store/cartSlice";
import TextArea from "antd/es/input/TextArea";

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
          message.success(
            <>
              <h1>
                Thanks for your order your food will be delivery to your
                doorstep as soon as possible
              </h1>
              <img
                src="./images/SVG/food-delivery1.gif"
                alt="delivery"
                className="w-full h-80"
              />
            </>
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
        <Badge count={cartProducts.length}>
          <BiShoppingBag className="cursor-pointer w-8 h-8"/>
        </Badge>
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
              src="../images/SVG/home1.webp"
              alt="order"
              className="w-full"
            />
            <Link
              to="menu"
              className="p-2 text-lg bg-green-200 rounded-lg"
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
                  className="cursor-pointer h-10"
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
                  className="cursor-pointer h-10"
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
                  className="cursor-pointer h-10"
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
                className="w-full bg-blue-600 h-10"
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
          <Col className="fixed bottom-0 right-0 flex items-center justify-between row-span-1 py-5 px-4 m-0 text-lg font-bold text-white bg-green-400 w-full sm:w-[450px] z-20">
            <button onClick={() => setOpenForm(true)}>
              Proceed for Checkout
            </button>
            <p>${total}.00</p>
          </Col>
        )}
      </Drawer>
    </Container>
  );
};

export default Cart;
