import React from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import Card from "./Card";
import Content from "./Content";

function Landing() {
  return (
    <div class="h-full w-full  bg-white rounded-[2.9rem] flex items-center justify-center border-box p-[0.5rem]">
      <div class="h-full w-full  bg-cover bg-center rounded-[2.4rem] flex items-center flex-col justify-between">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default Landing;
