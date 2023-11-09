import React from "react";
import heroImg from "./assets/hero.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem,
            architecto accusamus ullam, ipsum in similique repellendus
            voluptatum voluptas ea laudantium quasi laborum. Assumenda harum,
            rem praesentium repellat provident veniam molestiae!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt='woman and browser' className="img"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
