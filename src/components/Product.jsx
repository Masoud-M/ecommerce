import {
  Favorite,
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { React, useState } from "react";
import { Link } from "react-router-dom";
function Product({ item }) {
  const [hoverEffect, setHoverEffect] = useState(" opacity-0");

  const handleHoverEnter = () => {
    setHoverEffect(" opacity-100 hover:opacity-100 hover:bg-[rgba(0,0,0,0.2)]");
  };

  const handleHoverExit = () => {
    setHoverEffect(" opacity-0");
  };

  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3]  hover:text-white  hover:scale-110 ease-in duration-100";

  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      className="flex flex-initial items-center justify-center w-[250px] h-[280px] overflow-hidden rounded-md shadow-lg  m-2  relative object-cover "
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img className="  overflow-hidden w-full h-full" src={item.src} alt="/" />
      <div
        className={
          `flex items-center justify-center w-full h-full absolute  ease-in duration-100  ` +
          hoverEffect
        }
      >
        {/* icons */}
        <div className={iconStyle}>
          <Link to="/cart">
            <ShoppingCartOutlined />
          </Link>
        </div>
        <div onClick={handleFavorite} className={iconStyle}>
          {isFavorite ? <Favorite /> : <FavoriteBorderOutlined />}
        </div>
        <div className={iconStyle}>
          <Link to="/product">
            <SearchOutlined />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
