import React from "react";
import { useState } from "react";
import { CgUser } from "react-icons/cg";
import { useAuth } from "../../contexts/AuthContext";
import { Col, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { TbLogout } from "react-icons/tb";
import { GrSettingsOption } from "react-icons/gr";
import { BiQuestionMark } from "react-icons/bi";

const User = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
      navigate("/login", { replace: true });
    } catch {
      alert("Fail to Logout");
    }
    setLoading(false);
  }

  return (
    <>
      <div onClick={() => setOpenProfile(!openProfile)}>
        {currentUser ? (
          <img
            src={currentUser.photoURL}
            alt=""
            className="cursor-pointer w-8 h-8 rounded-full"
          />
        ) : (
          <CgUser className="cursor-pointer w-8 h-8" />
        )}
      </div>
      <div>
        {openProfile && (
          <Row className="fixed pt-5 space-y-5 transition-all duration-500 delay-300 bg-white shadow-md sm:right-10 top-20 w-80 right-6">
            <Col className="grid place-items-center">
              <img
                src={currentUser.photoURL}
                alt=""
                className="w-16 h-16 pb-2 rounded-full"
              />
              <p>{currentUser.displayName}</p>
              <h4 className="text-lg">{currentUser.email}</h4>
              <button className="px-4 py-2 my-4 border-2 rounded border-Text hover:ring-2">
                Manage Your Account
              </button>
            </Col>
            <Col className="px-4 space-y-4">
              <span className="flex items-center gap-3">
                <TbLogout className="w-8 h-8 text-slate-600" />
                <button onClick={handleLogout} className="text-lg">
                  Logout
                </button>
              </span>
              <span className="flex items-center gap-3">
                <GrSettingsOption className="w-8 h-6 text-slate-600" />
                <button className="text-lg">Account Settings</button>
              </span>
              <span className="flex items-center gap-3">
                <BiQuestionMark className="w-8 h-8 text-slate-600" />
                <button className="text-lg">Help</button>
              </span>
              <span className="flex gap-3 pt-4 pb-2">
                <h3 className="text-lg">Privacy Policy</h3> .{" "}
                <h3 className="text-lg">Terms of Service</h3>
              </span>
            </Col>
          </Row>
        )}
      </div>
    </>
  );
};

export default User;
