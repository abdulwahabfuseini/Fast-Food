import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";
import Google from "../../Assets/images/Social/googlesvg.png";

const Signup = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState("");
  const { Signup } = useAuth();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      await Signup(email, password);
      navigate("/loadingRedirect", { replace: true });
    } catch (error) {
      alert("Failed to Login");
    }
    setLoading(false);
  };

  // ======= Google Account ========
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/loadingRedirect", { replace: true });
    } catch (error) {
      alert("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div>
      <Container className="flex items-center justify-center w-full h-full my-32">
        <Card className="w-[350px] sm:w-[400px]">
          <Form
            onFinish={onFinish}
            form={form}
            name="normal_form"
            initialValues={{ remember: true }}
            layout="vertical"
            className="leading-3"
          >
            <header className="pb-2 text-xl font-bold text-center">
              REGISTER
            </header>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please Enter email",
                },
                { type: "email" },
              ]}
              hasFeedback
            >
              <Input
                type="email"
                placeholder="Enter Email Address"
                className="h-12 cursor-pointer"
                onChange={(e) => setUser(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please Enter password",
                },
                { type: "password" },
              ]}
              hasFeedback
            >
              <Input.Password
                type="password"
                placeholder="Enter Password"
                className="h-12 cursor-pointer"
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="ConfirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please Confirm password",
                },
                { type: "password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Password don't match");
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password
                type="password"
                placeholder="Confirm Password"
                className="h-12 cursor-pointer"
              />
            </Form.Item>
            <Form.Item
              name="agreement"
              wrapperCol={{ span: 24 }}
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          "To proceed, You need to agree to our terms and conditions"
                        ),
                },
              ]}
            >
              <Checkbox>
                Agree to our{" "}
                <a className="no-underline " href="/">
                  Terms and Conditions
                </a>
              </Checkbox>
            </Form.Item>
            <Button
              disabled={loading}
              type="primary"
              htmlType="submit"
              className="w-full h-12 bg-blue-400 ccursor-pointer"
            >
              Sign up with Email
            </Button>
            <p className="w-full my-3 text-lg text-center"> or </p> <br />
            <Col className="flex items-center justify-center gap-5">
              <span
                onClick={GoogleLogin}
                className="cursor-pointer hover:-translate-y-1"
              >
                <img
                  src={Google}
                  alt="facebook"
                  className="object-cover w-8 h-8 cursor-pointer"
                />
              </span>
            </Col>
            <Link to="/login">
              <h1 className="py-6 text-lg text-center cursor-pointer text-md hover:underline">
                Already have an account? <span>Sign up</span>
              </h1>
            </Link>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Signup;
