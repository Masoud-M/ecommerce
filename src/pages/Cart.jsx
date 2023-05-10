import React from "react";
import Announce from "../components/Announce";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Counter from "../components/Counter";

function Cart() {
  return (
    <div>
      <Announce />
      <Navbar />
      <div className="p-5">
        <div className="flex justify-center  text-5xl">Cart</div>

        {/* upper div of cart */}
        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="btn bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white">
            Continue Shopping
          </button>

          <button className="btn">Checkout</button>
        </div>

        {/* central div */}
        <div className=" flex mt-7 mobile:flex-col ">
          <div className="flex flex-col flex-1 ">
            {/* list of products div */}

            {/* first product */}
            <div className="flex w-full h-auto items-center mobile:flex-col">
              <div className="product flex self-start pl-5">
                <img
                  className=" w-[7.2rem] h-[80%] rounded-lg shadow-lg object-cover hover:scale-110 ease-in duration-300"
                  src="https://img.freepik.com/free-psd/jerzees-pullover-hooded-sweatshirt-mockup-01_126278-94.jpg?size=626&ext=jpg&uid=R100720479&ga=GA1.1.1903643225.1682415064&semt=robertav1_2_sidr"
                  alt="/"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>123456789
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> Placeholder
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer  ml-1 w-[20px] h-[20px] bg-blue-500"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b> Lg
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto mobile:mt-5">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className="my-7" />

            {/* 2nd product */}
            <div className="flex w-full h-auto items-center mobile:flex-col ">
              <div className="product flex self-start pl-5">
                <img
                  className=" w-[7.2rem] h-[80%] rounded-lg shadow-lg object-cover hover:scale-110 ease-in duration-300"
                  src="https://img.freepik.com/free-psd/jerzees-pullover-hooded-sweatshirt-mockup-01_126278-94.jpg?size=626&ext=jpg&uid=R100720479&ga=GA1.1.1903643225.1682415064&semt=robertav1_2_sidr"
                  alt="/"
                />
                <div className="description flex flex-col ml-5 h-auto justify-between">
                  <p>
                    <b className="mr-2">ID:</b>123456789
                  </p>
                  <p>
                    <b className="mr-2">Product:</b> Placeholder
                  </p>
                  <p className="flex items-center justify-start">
                    <b className="mr-2">Color:</b>
                    <div className="rounded-full border-2 p-[10px] cursor-pointer  ml-1 w-[20px] h-[20px] bg-blue-500"></div>
                  </p>
                  <p>
                    <b className="mr-2">Size:</b> Lg
                  </p>
                </div>
              </div>
              <div className=" flex flex-col justify-center items-center flex-auto mobile:mt-5">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$70</b>
                </p>
              </div>
            </div>
            <hr className="my-7" />
          </div>

          {/* Summery */}
          <div className=" p-5 flex-[0.4] w-auto h-[40vh] border-2 border-[#8a4af3] rounded-md shadow-lg flex flex-col items-center">
            <h1 className="text-[2rem]">Summery</h1>
            <div className="flex justify-between mt-3 w-full">
              <p>Subtotal</p>
              <p>$140</p>
            </div>
            <div className="flex justify-between mt-3 w-full">
              <p>Shipping</p>
              <p>$40</p>
            </div>
            <div className="flex justify-between mt-3 w-full">
              <p>Shipping discount</p>
              <p>-$40</p>
            </div>
            <div className="flex justify-between mt-3 w-full text-3xl font-bold">
              <p>Total</p>
              <p>$140</p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
