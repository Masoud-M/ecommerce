import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";

function Product({ item }) {
  return (
    <div className="flex items-center justify-center m-w-[300px] m-h-[350px] overflow-hidden rounded-md shadow-lg ">
      <img src={item.src} alt="/" />
      <div>{/* icons */}</div>
      <div>
        <ShoppingCartOutlined />
      </div>
      <div>
        <FavoriteBorderOutlined />
      </div>
      <div>
        <SearchOutlined />
      </div>
    </div>
  );
}

export default Product;
