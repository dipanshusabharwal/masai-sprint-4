import React from "react";
import "./Products.css";

function Products() {
  return (
    <div className="col-11 mx-auto d-flex mt-5 justify-content-between">
      <div className="card col border-0 remove-padding">
        <img
          className="card-img-top"
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZgxB?ver=0b92&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="Card image cap"
        />
        <div className="card-body remove-padding">
          <h6 className="card-title font-weight-bold mt-3">Surface Book 2</h6>
          <p className="card-text small">
            Give inspiration with a fast, powerful device.
          </p>
          <a href="" className="font-weight-bold small">
            SHOP NOW >
          </a>
        </div>
      </div>
      <div className="card col border-0">
        <img
          className="card-img-top"
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZBhz?ver=ec40&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="Card image cap"
        />
        <div className="card-body remove-padding">
          <h6 className="card-title font-weight-bold mt-3">
            Give joy with Surface Go
          </h6>
          <p className="card-text small">
            Small, strong and ready for every adventure.
          </p>
          <a href="" className="font-weight-bold small">
            SHOP NOW >
          </a>
        </div>
      </div>

      <div className="card col border-0">
        <img
          className="card-img-top"
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZbiY?ver=f317&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="Card image cap"
        />
        <div className="card-body remove-padding">
          <h6 className="card-title font-weight-bold mt-3">
            Inspire magic this holiday
          </h6>

          <p className="card-text small">
            Imagine what they’ll create with Office 365 for PC and Mac.
          </p>
          <a href="" className="font-weight-bold small">
            FOR UPTO 6 PEOPLE >
          </a>
          <a href="" className="font-weight-bold small ml-4">
            FOR 1 PERSON >
          </a>
        </div>
      </div>
      <div className="card col border-0 remove-padding">
        <img
          className="card-img-top"
          src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZqUZ?ver=79cc&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
          alt="Card image cap"
        />
        <div className="card-body remove-padding">
          <h6 className="card-title font-weight-bold mt-3">Xbox One X</h6>
          <p className="card-text small">
            Give thrills that’ll last all year with the world’s most powerful
            console.
          </p>
          <a href="" className="font-weight-bold small">
            SHOP NOW >
          </a>
        </div>
      </div>
    </div>
  );
}

export default Products;
