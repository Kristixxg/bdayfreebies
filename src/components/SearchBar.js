import React from "react";
import "./searchBar.css";

function SearchBar() {
  return (
    <div class="search-container">
      <form action="/search" method="get">
        <input
          class="search"
          id="searchleft"
          type="search"
          name="search"
          placeholder="Search a place..."
        />
        <label class="button searchbutton" for="searchleft">
          <span class="mglass">&#9906;</span>
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
