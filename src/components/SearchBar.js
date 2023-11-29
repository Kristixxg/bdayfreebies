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

  let isFound = false;

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
      <div className="absolute h-full sm:h-4/5 mt-[50px] overflow-scroll w-[calc(100%-2px)]">
        {allPlaces.records.map((data) => {
          let store = data.fields["name_of_place"];
          let name = store[0].toUpperCase() + store.slice(1).toLowerCase();

          if (
            store.toLowerCase().includes(place) ||
            store.toUpperCase().includes(place) ||
            name.includes(place)
          ) {
            isFound = true;
            return <Card data={data} />;
          }
        })}

        {!isFound && (
          <div className="flex flex-col items-center justify-center">
            <h1>No Results Found!</h1>
            <a href="https://kristixxg.github.io/bdayfreebies/">
              <button className="bg-blue-500 hover:bg-blue-400 text-xs text-white font-bold py-2 px-4 mt-2 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Refresh
              </button>
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
