import React from "react";
import Title from "./Title";
import SearchBar from "./SearchBar";

function Content() {
  return (
    <div className="absolute h-[calc(100%-6rem)] mt-14 w-[calc(100%-6px)] rounded-3xl">
      <Title />
      <div className="w-full h-[400px]">
        <SearchBar />
      </div>
    </div>
  );
}

export default Content;
