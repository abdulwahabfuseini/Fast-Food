import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'
import ScaleLoader from "react-spinners/ScaleLoader";

const LoadingRedirect = () => {
  const [loading, setLoading] = useState();
  const auth = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, [8000]);
  }, [loading]);

  loading  && navigate("/pageContent");
  
  return (
    <div>
      <div className="flex flex-col items-center justify-center my-40">
        <header className="text-2xl">Hello, {auth.user}</header>
        <h1 className="py-20 text-3xl">Welcome to Fast Food</h1>
        <ScaleLoader color="#36d7b7" loading={loading} size={500} margin={2} />
      </div>
    </div>
  );
};

export default LoadingRedirect;
