import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
  const style = "text-[14px] cursor-pointer ml-[25px] mobile:ml-0";
  return (
    <div className="navbar h-[60px] shadow-md relative z-10">
      <div className="wrapper px-[20px] py-[10px] flex justify-between items-center mobile:px-0">
        {/* left div */}
        <div className="left flex flex-1 items-center ">
          <div className="language cursor-pointer text-[16px] mobile:hidden">
            En
          </div>
          <div className="searchInput flex border-[2px] border-solid border-gray-200 rounded-md items-center ml-[10px] p-[5px]  focus-within:border-[#8a4af3] transition-all">
            <input
              className="input outline-none mobile:w-[50px] "
              type="text"
            />
            <Search className=" max-h-[16px]" />
          </div>
        </div>
        {/* Logo */}
        <div className=" center flex-1 text-center">
          <div className="logo font-bold text-lg mobile:text-sm">
            Summer Kings
          </div>
        </div>
        {/* Right div */}
        <div
          className="right flex flex-1 items-start justify-end mobile:flex-[1.5] mobile:justify-between mobile:px-4
        "
        >
          <div className={style}>
            <Link to="/register">Register</Link>
          </div>
          <div className={style}>
            <Link to="login">Sign in</Link>
          </div>
          <div className={style}>
            <Link to="cart">
              <Badge badgeContent={2} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
