import React from "react";
import "./header.css";

function Header() {
  let currentTimeDate = new Date();
  var hours = currentTimeDate.getHours();
  var minutes = currentTimeDate.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  return (
    <div className="w-full h-7 flex justify-evenly items-cente mt-2">
      <div className="flex flex-1 justify-center">
        {hours}:{minutes}
      </div>
      <div className="flex flex-1 items-center bg-black rounded-3xl"></div>

      <div className="flex flex-1 justify-end items-center">
        <img
          className="h-4 w-4 mr-3"
          alt="signal icon"
          src="https://cdn-icons-png.flaticon.com/128/6475/6475093.png"
        ></img>
        <img
          className="h-4 w-4 mr-3"
          alt="internet icon"
          src="https://cdn-icons-png.flaticon.com/128/2901/2901643.png"
        ></img>
        <img
          className="h-4 w-4 mr-3"
          alt="battery icon"
          src="https://cdn-icons-png.flaticon.com/128/664/664883.png"
        ></img>
      </div>
    </div>
  );
}

export default Header;
