import React, { useState } from "react";
import "./searchBar.css";

function SearchBar() {
  const [place, setPlace] = useState("");
  console.log(place);

  return (
    <div class="search-container">
      <form action="/search" method="get">
        <input
          onChange={(e) => setPlace(e.target.value)}
          value={place}
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
