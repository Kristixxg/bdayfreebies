import React from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";
import Card from "./Card";
import Footer from "./Footer";

function Content() {
  return (
    <div className="absolute h-[calc(100%-6rem)] mt-14 w-[calc(100%-6px)] rounded-3xl">
      <Title />
      <div className="w-full h-[50px]">
        <SearchBar />
      </div>
      <div className="h-4/5 overflow-scroll">
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default Content;
