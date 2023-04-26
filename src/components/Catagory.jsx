import React from "react";

function Catagory({ item }) {
  return (
    <div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
      <img className="w-full " src={item.src} alt="/" />
      <div className="flex absolute w-full h-full left-0 top-0 items-center justify-center flex-col">
        <h2 className="text-white font-medium text-[30px]">{item.title}</h2>
        <button className="btn">See more</button>
      </div>
    </div>
  );
}

export default Catagory;