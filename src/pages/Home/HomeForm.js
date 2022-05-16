import React from "react";
import "./HeroForm.css";
const HomeForm = () => {
  return (
    <div className="flex justify-center">
      <div className="form p-16 inline-block ">
        <h2>Get Free Estimate</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full"
          />
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-success w-full"
          />
          <button className="btn btn-primary">REQUEST A QOUTE</button>
        </div>
      </div>
    </div>
  );
};

export default HomeForm;
