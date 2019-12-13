import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Products from "./components/Products";
import CurrentSpecial from "./components/CurrentSpecial";
import OtherProductsCatalogue from "./components/OtherProductCatalogue";
import SocialHandle from "./components/SocialHandle";
import SiteMap from "./components/SiteMap";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Products />
      <CurrentSpecial />
      <OtherProductsCatalogue />
      <SocialHandle />
      <SiteMap />
    </div>
  );
}

export default App;
