import React from "react";
import SearchBar from "./SearchBar";
import Header from "./Header";
import Card from "./Card";

function Landing() {
  return (
    <div class="h-full w-full hover:cursor-pointer bg-white rounded-[2.9rem] flex items-center justify-center border-box p-[0.5rem]">
      <div class="h-full w-full  bg-cover bg-center rounded-[2.4rem] flex items-center flex-col justify-between">
        <Header />
        <SearchBar />
        <Card />
      </div>
    </div>
  );
}

export default Landing;
