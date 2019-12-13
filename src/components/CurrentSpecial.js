import React from "react";
import "./CurrentSpecial.css";

function CurrentSpecial() {
  return (
    <div className="col-11 mx-auto mt-3">
      <div className="card bg-dark text-dark border-0">
        <img
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3Zbj6?ver=2cfe&q=90&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=203&s=2120&d=795&aim=true"
          className="card-img"
        />
        <div className="card-img-overlay overlay-placement">
          <h2 className="card-title font-weight-bold">
            Xbox Game Pass Ultimate
          </h2>
          <p className="card-text small">
            Fill the holidays with fun. Discover your next favourite game.
          </p>
          <button className="btn btn-dark rounded-0 font-weight-bold">
            <span className="ml-3">Shop Now</span>
            <span className="mr-3"> ></span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CurrentSpecial;
