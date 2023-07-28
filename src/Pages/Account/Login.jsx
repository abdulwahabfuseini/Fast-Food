import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import { Button, Card, Checkbox, Form, Input  } from "antd";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../utils/firebase";

const Login = () => {
  const [swipe, setSwipe] = useState("SignUp" && "Login");
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form] = Form.useForm();


  const handleSwipe = () => {
    setSwipe((changeForm) => (changeForm === "Login" ? "SignUp" : "Login"));
  };

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
              {swipe === "SignUp" ? <h1>REGISTER</h1> : <h1>SIGN IN</h1>}
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
            {swipe === "Login" ? (
              <Col className="flex items-center justify-between mb-8">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a className="relative m-r-0" href="/">
                  Forgot password
                </a>
              </Col>
            ) : (
              ""
            )}
            {swipe === "SignUp" ? (
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
            ) : (
              ""
            )}
            {swipe === "SignUp" ? (
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
            ) : (
              ""
            )}
            <Button
              disabled={loading}
              type="primary"
              htmlType="submit"
              className="w-full h-12 bg-blue-400 ccursor-pointer"
            >
              Sign {swipe === "SignUp" ? "up" : "in"} with Email
            </Button>
            <p className="w-full my-3 text-lg text-center"> or </p> <br />
            <Col className="flex items-center justify-center gap-5">
              <span
                onClick={GoogleLogin}
                className="cursor-pointer hover:-translate-y-1"
              >
                <img
                  src="../images/Social/googlesvg.png"
                  alt="facebook"
                  className="object-cover w-8 h-8 cursor-pointer"
                />
              </span>
            </Col>
            <Col>
              {swipe === "Login" ? (
                <Col
                  onClick={handleSwipe}
                  className="py-6 text-lg text-center cursor-pointer text-md hover:underline"
                >
                  Don't have an account yet? <span>Sign up</span>
                </Col>
              ) : (
                <Col
                  onClick={handleSwipe}
                  className="py-6 text-lg text-center cursor-pointer text-md hover:underline"
                >
                  Already have an account?{" "}
                  <span className="text-center cursor-pointer">Sign in</span>
                </Col>
              )}
            </Col>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
