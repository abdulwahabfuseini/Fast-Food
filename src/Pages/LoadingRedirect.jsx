import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { BallTriangle } from "react-loader-spinner";

const LoadingRedirect = () => {
  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [10000]);
  }, [loading]);

  loading && navigate("/fastfood");

  return (
    <div>
      <div className="flex flex-col items-center justify-center my-40">
      <div className="grid gap-y-2 place-items-center">
        <img src={currentUser?.photoURL} alt="avatar"  className="object-contain w-20 h-20 rounded-full"/>
        <header className="text-2xl">Hello, {currentUser.displayName}</header>
      </div>
        <h1 className="py-6 text-3xl">Welcome to Fast Food</h1>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
        <h1 className="pt-4">Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingRedirect;
