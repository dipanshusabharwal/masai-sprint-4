import React from "react";
import "./OtherProductsCatalogue.css";

function OtherProductsCatalogue() {
  return (
    <div className="col-11 mx-auto mt-4">
      <h5 className="font-weight-bold mt-5">For Work</h5>
      <div className="card-deck mt-4">
        <div className="card border-0">
          <img
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1CmIw?ver=e555&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body remove-padding">
            <h6 className="card-title font-weight-bold mt-3">
              Windows 10 Enterprise
            </h6>
            <p className="card-text small">
              Download the free 90-day evaluation for IT professionals.
            </p>
            <a href="" className="font-weight-bold small">
              DOWNLOAD NOW >
            </a>
          </div>
        </div>
        <div className="card border-0">
          <img
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2mheW?ver=527a&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&x=444&y=171&aim=true"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body remove-padding">
            <h6 className="card-title font-weight-bold mt-3">
              Office 365 for Business
            </h6>
            <p className="card-text small">
              Access your files from anywhere, online or offline.
            </p>
            <a href="" className="font-weight-bold small">
              SHOP NOW >
            </a>
          </div>
        </div>
        <div className="card border-0">
          <img
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4561D?ver=b6fc&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body remove-padding">
            <h6 className="card-title font-weight-bold mt-3">
              Try AI in Azure
            </h6>
            <p className="card-text small">
              Build intelligent apps using Azure Cognitive Services – including
              12 services now free for 12 months – with your Azure free account.
            </p>
            <a href="" className="font-weight-bold small">
              START FREE >
            </a>
          </div>
        </div>
        <div className="card border-0">
          <img
            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2OfW4?ver=3149&q=90&m=6&h=201&w=358&b=%23FFFFFFFF&l=f&o=t&aim=true"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body remove-padding">
            <h6 className="card-title font-weight-bold mt-3">
              Get Visual Studio 2019
            </h6>
            <p className="card-text small">
              Download Visual Studio 2019, the productive, modern and innovative
              IDE.
            </p>
            <a href="" className="font-weight-bold small">
              DOWNLOAD NOW >
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherProductsCatalogue;
