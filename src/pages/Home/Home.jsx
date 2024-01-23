import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { getUser } from "../../utilities/users-service.js";
import TechNews from "../../components/TechNews/TechNews.jsx";
import BannerImg from "./banner-img.png";
import StickyImg from "./sticky-memories.png";
import BestQuality from "./Best-quality.png";
import About from "../About/About.jsx";


function Home() {
  const [user, setUser] = useState(getUser());

  return (
    <div>
      <div className="home-banner-div">
        <div className="right-side-banner">
          <img className="best-quality" src={BestQuality} alt="" />
          <div>

            <Link to='/about'><button>About</button></Link>
            

            {!user ? (
              <Link to="/auth">
                <button>Make Memory</button>
              </Link>
            ) : (
              <Link to="/uploadImg">
                <button>Make Memory</button>
              </Link>
            )}
            
          </div>
        </div>
        <div className="left-side-banner">
          {/* <h1>Sticky Memories</h1> */}
          <img className="sticky-letters" src={StickyImg} alt="" />
          <img className="baner-img" src={BannerImg} alt="" />
        </div>
      </div>

      <TechNews />

      <About/>

      {user ? (
        <Link to="/uploadImg">
          <button>Make a memory</button>
        </Link>
      ) : (
        <Link to="/auth">
          <button>Make a memory</button>
        </Link>
      )}
    </div>
  );
}

export default Home;
