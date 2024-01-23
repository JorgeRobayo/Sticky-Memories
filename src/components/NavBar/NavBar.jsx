import React from "react";
import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";
import userAvatar from "./loginlogo.png";
import Logo from "../Logo/Logo";

function Navbar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <div>
      <nav className="nav">
        <div className="nav-div">
          <img className="user-avatar" src={userAvatar} alt="" />
          <div>
            <p>Signed as: {user.name} </p>
            <Link to="" onClick={handleLogOut}>
              <button>Log-Out</button>
            </Link>
          </div>
        </div>
        <div>
          <Logo />
        </div>
        
        <div className="nav-page-links">
          <Link to="/">
            <p className="nav-p">Home</p>
          </Link>
          <Link to="/uploadImg">
            <p className="nav-p">Make a Memory</p>
          </Link>
          <Link to="/orders">
            <p className="nav-p">Cart</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
