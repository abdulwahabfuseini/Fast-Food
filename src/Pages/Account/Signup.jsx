import React, { useState } from "react";
import { Button, Card, Checkbox, Form, Input, message } from "antd";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { storage } from "../../utils/firebase";
import { db } from "../../utils/firebase";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from "react-spinners";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [form] = Form.useForm();

  const handleSignUp = async (values) => {
    setLoading(true);
    try {
      const { username, email, password } = values;
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${ Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, data);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          toast.error(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", user.uid), {
              uid: "user.id",
              displayName: username,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
      navigate("/login", { replace: true });
      message.success("Account created successfully")
    } catch (error) {
      toast.error("Ooops!!! failed to create an account", {
        position: "top-right",
        theme: "colored",
      })
    }
    setLoading(false)
  };

  return (
    <>
     <div className="flex items-center justify-center w-full h-full my-12">
      <Card className="w-full sm:w-[400px]">
        <Form
          onFinish={handleSignUp}
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
            name="username"
            label="Username"
            rules={[
              {
                required: true,
                message: "Please Enter Username",
              },
              { type: "text" },
            ]}
            hasFeedback
          >
            <Input
              type="text"
              placeholder="Enter Full Name"
              className="h-12 cursor-pointer"
              onChange={(e) => setData(e.target.value)}
            />
          </Form.Item>
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
              {min: 7},
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
              {min: 7},
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
          <Form.Item>
            <input
              type="file"
              onChange={(e) => setData(e.target.files[0])}
              required
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
             {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <ClipLoader color="#36d7b7"
                    loading={loading}
                    size={20}
                    margin={2}
                    
                    />
                  <h6>Loading...</h6>
                </div>
              ) : (
                "Sign up with Email"
              )}
           
          </Button>
          <Link to="/login">
            <h1 className="py-6 text-lg text-center cursor-pointer text-md hover:underline">
              Already have an account? <span>Sign up</span>
            </h1>
          </Link>
        </Form>
      </Card>
    </div>
      <ToastContainer />
    </>
  );
};

export default Signup;


