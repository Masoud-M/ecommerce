import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Catagories from "../components/Catagories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Announce />
      <Navbar />
      <Slider />
      <Catagories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
