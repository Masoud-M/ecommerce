import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Catagories from "../components/Catagories";

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Catagories />
    </div>
  );
}

export default Home;
