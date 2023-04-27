import React from "react";
import {
  EmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
function Footer() {
  const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white ";

  return (
    <div className="flex items-center  justify-around p-2">
      <div className="flex flex-col flex-1  flex-wrap p-2">
        {/* Store information */}
        <h1 className=" text-[25px] ">Placeholder</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tenetur
          minus animi laboriosam! Vitae sequi voluptatem magnam fuga esse
          corrupti autem deleniti quidem architecto cumque, quas, voluptatum
          eaque! Accusantium, similique.
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + " bg-blue-700"}>
            <Facebook />
          </div>
          <div className={socialStyle + " bg-orange-500"}>
            <Instagram />
          </div>
          <div className={socialStyle + " bg-sky-400"}>
            <Twitter />
          </div>
          <div className={socialStyle + " bg-red-600"}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className=" flex flex-col flex-1 p-2">
        {/* Contact information */}

        <div className="flex m-3">
          <LocationOnOutlined />
          <p className="pl-3">State Of California</p>
        </div>
        <div className="flex m-3">
          <LocalPhoneOutlined />
          <p className="pl-3">+1-123456789</p>
        </div>
        <div className="flex m-3">
          <EmailOutlined />
          <p className="pl-3">Something@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
