import React from "react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { GrSettingsOption } from "react-icons/gr";
import { BiQuestionMark } from "react-icons/bi";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { message } from "antd";

const User = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  async function handleLogout() {
    setLoading(true);
    try {
      await signOut(auth);
      navigate("/login", { replace: true });
      message.success("Successfully Logged out")
    } catch (error) {
      toast.error("Ooops!!! failed to Logout", {
        position: "top-right",
        theme: "colored",
      })
    }
    setLoading(false);
  }

  return (
    <>
      <div onClick={() => setOpenProfile(!openProfile)}>
        {currentUser && (
          <IconButton>
            <Avatar sx={{ width: 36, height: 36 }}>
              <img
                src={currentUser?.photoURL}
                alt="avatar"
                className="object-contain"
              />
            </Avatar>
          </IconButton>
        )}
      </div>
      <div>
        {openProfile && (
          <Row className="fixed w-64 pt-5 space-y-4 transition-all duration-500 delay-300 bg-white shadow-md sm:right-10 top-20 sm:w-80 right-6">
            <Col className="grid place-items-center">
              <IconButton>
                <Avatar sx={{ width: 65, height: 65 }}>
                  <img
                    src={currentUser?.photoURL}
                    alt="avatar"
                    className="object-contain w-20 h-20"
                  />
                </Avatar>
              </IconButton>
              <p>{currentUser?.displayName}</p>
              <h4 className="sm:text-lg">{currentUser?.email}</h4>
              <button className="p-2 border-2 rounded sm:my-3 sm:text-lg sm:py-2 sm:px-4 border-Text lg:hover:ring-2">
                Manage Your Account
              </button>
            </Col>
            <Col className="px-4 space-y-2">
              <span className="flex items-center gap-3">
                <TbLogout className="w-6 h-6 sm:h-8 sm:w-8 text-slate-600" />
                <button onClick={handleLogout} className="sm:text-lg">
                  Logout
                </button>
              </span>
              <span className="flex items-center gap-3">
                <GrSettingsOption className="w-6 h-6 sm:h-8 text-slate-600" />
                <button className="sm:text-lg">Account Settings</button>
              </span>
              <span className="flex items-center gap-3">
                <BiQuestionMark className="w-6 h-6 sm:h-8 sm:w-8 text-slate-600" />
                <button className="sm:text-lg">Help</button>
              </span>
              <span className="flex py-2 gap-x-2 sm:gap-x-3 sm:pb-2 sm:pt-3">
                <h3 className="sm:text-lg">Privacy Policy</h3> .{" "}
                <h3 className="sm:text-lg">Terms of Service</h3>
              </span>
            </Col>
          </Row>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default User;
