import React, { useState } from "react";
import  {Link} from 'react-router-dom'
import './Home.css'
import { getUser } from "../../utilities/users-service.js";
import TechNews from "../../components/TechNews/TechNews.jsx";

function Home() {
  const [user, setUser] = useState(getUser());

  return (
    <div>
      <div className="home-banner-div">
        <div>
          <h1>Best Custom Printing Quality</h1>
          <button>About</button>
          <button>Make Memory</button>
        </div>
        <div>
          <h1>Sticky Memories</h1>
        </div>
      </div>
    
    <TechNews/>
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

      {user ? (<Link to='/uploadImg' ><button>Make a memory</button></Link>):(<Link to='/auth' ><button>Make a memory</button></Link>)}
      
    
    </div>
  );
}

export default Home;
