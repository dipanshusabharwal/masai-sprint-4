import React from "react";
import "./SiteMap.css";

function SiteMap() {
  return (
    <div className="mt-5">
      <div className="jumbotron jumbotron-fluid" id="footer">
        <div className="container-fluid d-flex">
          <div className="col small-text">
            <h6 className="text-muted font-weight-bold small-header">
              What's new
            </h6>
            <p className="text-muted mt-3">Surface Go</p>
            <p className="text-muted">Surface Pro</p>
            <p className="text-muted">Windows 10 apps</p>
            <p className="text-muted">Office Apps</p>
          </div>

          <div className="col small-text">
            <h6 className="text-muted font-weight-bold">Microsoft Store</h6>
            <p className="text-muted mt-3">Account Profile</p>
            <p className="text-muted">Download Center</p>
            <p className="text-muted">Microsoft Store Support</p>
            <p className="text-muted">Returns</p>
            <p className="text-muted">Order Tracking</p>
          </div>

          <div className="col small-text">
            <h6 className="text-muted font-weight-bold">Education</h6>
            <p className="text-muted mt-3">Microsoft in education</p>
            <p className="text-muted">Office for students</p>
            <p className="text-muted">Office 365 for schools</p>
            <p className="text-muted">Microsoft Azure in education</p>
          </div>

          <div className="col small-text">
            <h6 className="text-muted font-weight-bold">Enterprise</h6>
            <p className="text-muted mt-3">Azure</p>
            <p className="text-muted">AppSource</p>
            <p className="text-muted">Government</p>
            <p className="text-muted">Healthcare</p>
            <p className="text-muted">Manufacturing</p>
            <p className="text-muted">Financial Services</p>
            <p className="text-muted">Retail</p>
          </div>

          <div className="col small-text">
            <h6 className="text-muted font-weight-bold">Developer</h6>
            <p className="text-muted mt-3">Microsoft Visual Studio</p>
            <p className="text-muted">Developer Network</p>
            <p className="text-muted">TechNet</p>
            <p className="text-muted">Channel 9</p>
            <p className="text-muted">Office Dev Center</p>
          </div>

          <div className="col small-text">
            <h6 className="text-muted font-weight-bold">Company</h6>
            <p className="text-muted mt-3">Careers</p>
            <p className="text-muted">About Microsoft</p>
            <p className="text-muted">Company news</p>
            <p className="text-muted">Privacy at microsoft</p>
            <p className="text-muted">Investors</p>
            <p className="text-muted">Security</p>
          </div>
        </div>

        <div className="container-fluid d-flex justify-content-between mt-3 small-text override-padding">
          <div className="col d-flex">
            <img src="globe.png" width="22px" height="22px" />
            <p className="ml-3 text-muted">English (India)</p>
          </div>

          <div className="text-muted">Contact Microsoft</div>
          <div className="text-muted ml-5">Privacy & cookies</div>
          <div className="text-muted ml-5">Terms of use</div>
          <div className="text-muted ml-5">Trademarks</div>
          <div className="text-muted ml-5">&copy; Microsoft 2019</div>
        </div>
      </div>
    </div>
  );
}
export default SiteMap;
