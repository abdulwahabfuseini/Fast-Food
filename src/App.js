import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PageContent from "./pages/PageContent";
import StartPage from "./pages/StartPage";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import LoadingRedirect from "./pages/LoadingRedirect";

import Aos from "aos";
import "aos/dist/aos.css";


Aos.init();

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<StartPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="loadingRedirect" element={<LoadingRedirect />} />
            <Route path="fastfood" element={<PageContent />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
