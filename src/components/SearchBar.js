import React, { useState } from "react";
import "./searchBar.css";
import fetchRestaurants from "../fetchPlaces";
import Card from "./Card";
import Footer from "./Footer";

const allPlaces = await fetchRestaurants();
// console.log("All Places: ", allPlaces);

function SearchBar() {
  const [place, setPlace] = useState("");
  console.log(place);

  return (
    <>
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
      <div className="absolute h-4/5 mt-[50px] overflow-scroll w-[calc(100%-2px)]">
        {allPlaces.records.map((data) => {
          let store = data.fields["name_of_place"];
          if (store.toLowerCase().includes(place)) {
            return <Card data={data} />;
          }
        })}
      </div>
    </>
  );
}

export default SearchBar;
