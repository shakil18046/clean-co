import React from "react";
import "./Hero.css";
import girl from "../../Assests/img/bucketgirl 1.png";
const Hero = () => {
  return (
    <div>
      <div className="hero  bg-base-200 mt-16">
        <div className="hero-content flex">
          <div>
            <h1 className="text-5xl font-bold">
              Professional Cleaning Service
            </h1>
            <p className="py-6 max-w-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <img className="md:w-full" src={girl} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
