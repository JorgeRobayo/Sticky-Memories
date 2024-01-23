import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service.js";
import NewOrderPage from "../NewOrderPage/NewOrderPage.jsx";
import AuthPage from "../AuthPage/AuthPage.jsx";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage.jsx";
import Navbar from "../../components/NavBar/NavBar.jsx";
import Home from "../Home/Home.jsx";
import UploadImg from "../UploadImg/UploadImg.jsx";
import About from "../About/About.jsx";
import CheckOut from '../CheckOut/CheckOut.jsx'

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
      {!user ? (
        <div>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/auth"
            element={<AuthPage user={user} setUser={setUser} />}
          />
        </Routes>
        </div>
        
      ) : (
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/checkOut" element={<CheckOut />} />
            <Route
              path="/orders/new"
              element={<NewOrderPage user={user} setUser={setUser} />}
            />
            <Route
              path="/orders"
              element={<OrderHistoryPage user={user} setUser={setUser} />}
            />
            <Route 
            path='/uploadImg' 
            element={<UploadImg user={user} setUser={setUser}/>}/>
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
