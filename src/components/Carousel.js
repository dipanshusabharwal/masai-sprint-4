import React from "react";

function Carousel() {
  return (
    <div className="col-11 mx-auto mt-2">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card text-dark">
              <img
                className="card-img"
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3ZOwj?ver=0a0e&q=90&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=200&s=2120&d=795&aim=true"
              />
              <div className="card-img-overlay mt-5 ml-5">
                <h2 className="card-title mt-5 ml-5 font-weight-bold">
                  Ready whenever you are,
                </h2>
                <h2 className="card-title ml-5 font-weight-bold">
                  wherever you are
                </h2>
                <p className="card-text small ml-5 mt-2">
                  Give joy with Surface Laptop 2
                </p>
                <button className="btn btn-dark ml-5 mt-2 rounded-0 font-weight-bold">
                  <span className="ml-3">Shop Now</span>
                  <span className="mr-3"> ></span>
                </button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="card text-dark">
              <img
                className="card-img"
                src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE3Zgyg?ver=9e41&q=90&m=8&h=600&w=1600&b=%23FFFFFFFF&l=f&x=0&y=199&s=2120&d=795&aim=true"
              />
              <div className="card-img-overlay mt-5 ml-5">
                <h2 className="card-title mt-5 ml-5 font-weight-bold">
                  Power through every,
                </h2>
                <h2 className="card-title ml-5 font-weight-bold">day</h2>
                <p className="card-text small ml-5 mt-2">
                  Give possibility with Surface Pro 6
                </p>
                <button className="btn btn-dark ml-5 mt-2 rounded-0 font-weight-bold">
                  <span className="ml-3">Shop Now</span>
                  <span className="mr-3"> ></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
export default Carousel;
