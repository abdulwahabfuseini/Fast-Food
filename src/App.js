import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PageContent from "./Pages/PageContent";
import StartPage from "./Pages/StartPage";
import Login from "./Pages/Account/Login";
import LoadingRedirect from "./Pages/LoadingRedirect";
import Signup from "./Pages/Account/Signup";


const App = () => {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/Fast-Food" element={<StartPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="loadingRedirect" element={<LoadingRedirect />} />
            <Route path="pageContent" element={<PageContent />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
