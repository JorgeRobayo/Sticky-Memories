import React from "react";
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'
function Navbar({user ,setUser}) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <>
      <nav style={{ justifyContent: "space-evenly", display: "flex" }}>

      <div style={{justifyContent:'space-around'}}>
        <p style={{margin:'1em'}}>Welcome {user.name}, </p>
        <p style={{margin:'1em'}}> Logged In : {user.email}</p>
        <Link to="" onClick={handleLogOut}><button>Log-Out</button></Link>
      </div>

        <Link to="/"><h2>Home</h2></Link>
        <Link to="/uploadImg"><h2>Make a Memory</h2></Link>
        <Link to="/orders"><h2>Cart</h2></Link>
      </nav>
    </>
  );
}

export default Navbar;
