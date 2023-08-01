import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("token") || "");

  return (
    <Router>
      <Header userToken={userToken} setUserToken={setUserToken} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route
          path="/signup"
          element={<Signup setUserToken={setUserToken} />}
        />
        <Route path="/login" element={<Login setUserToken={setUserToken} />} />
        <Route path="/publish" element={<Publish token={userToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
