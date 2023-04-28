import React from "react";
import { ApiCatagories } from "../apifolder/CatagoryApi";
import Catagory from "./Catagory";

function Catagories() {
  return (
    <div className="flex mobile:flex-col justify-between items-center p-5">
      {ApiCatagories.map((catagory, index) => {
        return <Catagory item={catagory} key={index} />;
      })}
    </div>
  );
}

export default Catagories;
