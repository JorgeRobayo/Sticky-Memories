import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { getUser } from "../../utilities/users-service.js";
import TechNews from "../../components/TechNews/TechNews.jsx";
import BannerImg from "./banner-img.png";
import StickyImg from "./sticky-memories.png";
import BestQuality from "./Best-quality.png";

function Home() {
  const [user, setUser] = useState(getUser());

  return (
    <div>
      <div className="home-banner-div">
        <div className="right-side-banner">
          <img className="best-quality" src={BestQuality} alt="" />
          <div>
            <button>About</button>

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
      <h2>who are we?</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sed
        consequatur dolorem laudantium ducimus nobis velit adipisci possimus
        dicta mollitia provident sunt reiciendis quidem ad, nam consequuntur
        necessitatibus. Esse dolores minima explicabo molestias. Voluptas
        laborum saepe neque distinctio debitis reprehenderit quaerat expedita
        asperiores libero. Aut quaerat minima, iste minus ullam molestiae.
        Expedita, earum eligendi at sapiente accusantium quisquam facilis
        similique accusamus eaque reprehenderit ipsa mollitia doloribus, nulla
        explicabo quia laborum quaerat omnis, ab consequatur? Odio praesentium
        nesciunt accusantium ducimus placeat nobis dignissimos mollitia beatae
        rerum, tenetur porro dicta debitis maiores architecto id alias quia
        harum totam error vitae, consequatur voluptates soluta ut quo. Quibusdam
        et veniam perferendis iure libero placeat voluptate ipsa, ex, minus
        beatae, illo nisi? Similique unde eaque doloremque rerum. Eaque eos,
        numquam distinctio ex pariatur, itaque saepe eveniet placeat adipisci
        facere molestias similique debitis cupiditate velit deleniti nobis
        aperiam modi? Eos aspernatur dolore deserunt cupiditate itaque enim
        iusto quis dolores, quas delectus repellendus unde quibusdam mollitia
        sequi suscipit aperiam esse adipisci porro. Dolorum quo ab nostrum
        sapiente harum ipsa veritatis facilis, eius libero. Praesentium rem
        laboriosam ipsam fugiat non eum quas accusantium repellendus possimus
        commodi sunt qui unde quos tenetur delectus fuga, voluptatum quaerat
        sapiente! Laboriosam, vero.
      </p>
      <h2>How does it work?</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sed
        consequatur dolorem laudantium ducimus nobis velit adipisci possimus
        dicta mollitia provident sunt reiciendis quidem ad, nam consequuntur
        necessitatibus. Esse dolores minima explicabo molestias. Voluptas
        laborum saepe neque distinctio debitis reprehenderit quaerat expedita
        asperiores libero. Aut quaerat minima, iste minus ullam molestiae.
        Expedita, earum eligendi at sapiente accusantium quisquam facilis
        similique accusamus eaque reprehenderit ipsa mollitia doloribus, nulla
        explicabo quia laborum quaerat omnis, ab consequatur? Odio praesentium
        nesciunt accusantium ducimus placeat nobis dignissimos mollitia beatae
        rerum, tenetur porro dicta debitis maiores architecto id alias quia
        harum totam error vitae, consequatur voluptates soluta ut quo. Quibusdam
        et veniam perferendis iure libero placeat voluptate ipsa, ex, minus
        beatae, illo nisi? Similique unde eaque doloremque rerum. Eaque eos,
        numquam distinctio ex pariatur, itaque saepe eveniet placeat adipisci
        facere molestias similique debitis cupiditate velit deleniti nobis
        aperiam modi? Eos aspernatur dolore deserunt cupiditate itaque enim
        iusto quis dolores, quas delectus repellendus unde quibusdam mollitia
        sequi suscipit aperiam esse adipisci porro. Dolorum quo ab nostrum
        sapiente harum ipsa veritatis facilis, eius libero. Praesentium rem
        laboriosam ipsam fugiat non eum quas accusantium repellendus possimus
        commodi sunt qui unde quos tenetur delectus fuga, voluptatum quaerat
        sapiente! Laboriosam, vero.
      </p>

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
