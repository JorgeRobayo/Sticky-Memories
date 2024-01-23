import React from "react";
import "./About.css";
import AboutImg from "./about-text-img.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="master-div">
      {/* <h1>About</h1> */}
      <img className="about-text-img" src={AboutImg} alt="" />

      <div className="about-container">
        <h2>About Us</h2>
        <p>
          About Us Welcome to our world of creativity and custom printing! We
          are a small, passionate printing on demand business specializing in
          stickers, magnets, business cards, banners, and more. Our mission is
          to bring your ideas to life with the highest quality products,
          delivered in a timely manner.
        </p>
      </div>
      <div className="grid">
        <div className="about-container who-are-we">
          <h2>Who are we?</h2>
          <p>
            We are a dynamic group of college students driven by a shared
            passion for graphic design and art. Our team is dedicated to
            providing top-notch services in the print on demand industry. With a
            blend of creativity, enthusiasm, and hard work, we strive to make
            every order a unique and personalized experience.
          </p>
        </div>

        <div className="about-container our-commitment">
          <h2>Our Commitment to Quality</h2>
          <p>
            At our core, we believe in delivering the best quality products to
            our customers. From vibrant stickers to eye-catching banners, each
            item is crafted with precision and attention to detail. We
            understand the importance of your creations, and we are committed to
            turning them into tangible, beautifully printed realities.
          </p>
        </div>
        <div className="about-container delivery-time">
          <h1>Delivery Timeframe</h1>
          <p>
            We understand that timely delivery is crucial. On average, our
            packages are processed and shipped within 10 days. We prioritize
            efficient handling to ensure your creations reach you promptly. Join
            us on this exciting journey of creativity and customization. Your
            imagination is our inspiration, and we look forward to turning your
            visions into beautifully printed masterpieces!
          </p>
        </div>
        <div className="about-container eco-friendly">
          <h1>
            Eco-Friendly Practices
          </h1>
          <p> Our production processes are designed with
            the environment in mind. We employ eco-friendly practices to reduce
            waste, conserve energy, and lower our carbon footprint. Our
            commitment to sustainable printing practices ensures that your
            creations are not only visually stunning but also produced with the
            planet's well-being in focus.</p>
        </div>
      </div>

      <div className="about-container how-does-work">
        <h2>How does it work?</h2>
        <ol>
          <li className="how-works-list">
            Visit Our Landing Page: Explore our diverse range of products and
            services on the landing page.
          </li>
          <li className="how-works-list">
            Create a Memory: Dive into the "Create a Memory" section where the
            magic begins. If you're new, you'll be guided to sign up, and if
            you're already part of our community, you'll head straight to the
            image upload page.
          </li>
          <li className="how-works-list">
            Upload Your Image: Choose the image you want to bring to life. Once
            submitted, you'll be directed to create a new order.
          </li>
          <li className="how-works-list">
            Select Your Services: Browse through our offerings and choose the
            services that best suit your needs.
          </li>
          <li className="how-works-list">
            Proceed to Checkout: It's time to check out and make your creation a
            reality. Your order is just a few clicks away.
          </li>
          <li className="how-works-list">
            Check Past Orders: Visit the cart section to review and manage your
            past orders. We value the memories you've created with us.
          </li>
        </ol>
      </div>
    </div>
  );
}

export default About;
