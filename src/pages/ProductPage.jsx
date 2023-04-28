import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";

function ProductPage() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="flex justify-center mobile:flex-col mobile:p-5">
        <div className="flex flex-1 items-center justify-center">
          {/* img */}
          <img
            src="https://img.freepik.com/free-psd/jerzees-pullover-hooded-sweatshirt-mockup-01_126278-94.jpg?size=626&ext=jpg&uid=R100720479&ga=GA1.1.1903643225.1682415064&semt=robertav1_2_sidr"
            alt="/"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-110 object-cover ease-in duration-300"
          />
        </div>
        <div className="flex flex-[1.3] items-start justify-start flex-col my-10">
          {/* info */}
          <h1 className="title text-[30px] mobile:text-center">
            Product name placeholder
          </h1>
          <p className="pr-[4rem] text-justify  mt-4 mobile:pr-0 mobile:px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            corporis accusantium nihil sunt commodi, quo ipsum! Distinctio, illo
            placeat est doloremque atque, accusantium sit blanditiis, velit qui
            ducimus impedit eveniet.
          </p>
          <p className=" mt-7 text-3xl">
            Price: <b>$70</b>
          </p>
          {/* color variants */}
          <div className=" flex text-2xl mt-7">
            Colors
            <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:scale-110"></div>
            <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:scale-110"></div>
            <div className="bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:scale-110"></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select className="ml-5 border-2">
              <option selected disabled>
                Select
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="mt-5">
            <Counter />
          </div>
          <button className="btn mt-5 mobile:self-center mobile:mt-7">
            Add to cart
          </button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
