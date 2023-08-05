import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Button, Card, Checkbox, Form, Input } from "antd";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import Google from "../../Assets/images/Social/googlesvg.png";
import FaceBook from "../../Assets/images/Social/facebookf.png";

const Login = () => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      await login(email, password);
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
      alert("Failed to Login");
    }
    setLoading(false);
  };

  // =------ FaceBook Account =====
  const facebookProvider = new FacebookAuthProvider();
  const FacebookLogin = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, facebookProvider);
      navigate("/loadingRedirect", { replace: true });
    } catch (error) {
      alert("Failed to Login");
    }
    setLoading(false);
  };


  return (
    <div>
      <Container className="flex items-center justify-center w-full h-full my-32 px-3">
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
              SIGN IN
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
            <Col className="flex items-center justify-between mb-8">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a className="relative m-r-0" href="/">
                Forgot Password
              </a>
            </Col>
            <Button
              disabled={loading}
              type="primary"
              htmlType="submit"
              className="w-full h-12 bg-blue-400 ccursor-pointer"
            >
              Sign in with Email
            </Button>
            <p className="w-full my-3 text-lg text-center"> or </p> <br />
            <Col className="flex items-center justify-center gap-5">
              <span
                onClick={GoogleLogin}
                className="cursor-pointer"
              >
                <img
                  src={Google}
                  alt="facebook"
                  className="object-cover w-8 h-8 cursor-pointer"
                />
              </span>
              <span
                onClick={FacebookLogin}
                className="cursor-pointer"
              >
                <img
                  src={FaceBook}
                  alt="facebook"
                  className="object-cover w-8 h-8 cursor-pointer"
                />
              </span>
            </Col>
            <Link to="/signup">
              <h1 className="py-6 text-md text-center cursor-pointer text-md hover:underline">
                Don't have an account yet? <span>Sign up</span>
              </h1>
            </Link>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Login;

