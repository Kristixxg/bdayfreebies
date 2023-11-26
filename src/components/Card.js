import React, { useEffect } from "react";
import "./card.css";
import fetchRestaurants from "../fetchPlaces";

const places = await fetchRestaurants();
console.log(places);

function Card() {
  return (
    <div className="card">
      {places.records.map((place) => {
        return (
          <div class="wrap animate pop">
            <div class="overlay">
              <div class="overlay-content animate slide-left delay-2 ">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <h3 class="animate-charcter">
                        {" "}
                        {place.fields["name_of_place"]}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div class="image-content animate slide">
                <img
                  className="opacity-20 object-cover"
                  alt="cover"
                  src={place.fields.coverImage}
                ></img>
              </div>
            </div>

            <div class="text flex flex-col items-end">
              <img class="inset" src={place.fields["coverImage"]} alt="" />
              <div className="flex flex-col items-end ">
                <h3 class="text-sm">{place.fields["name_of_place"]}</h3>
                <p className="text-xs font-bold uppercase text-right">
                  {place.fields.items}
                </p>
                <p className="text-xs max-w-[200px] text-right flex-wrap ">
                  {" "}
                  <em className="font-bold">*Conditions: </em>{" "}
                  {place.fields.condition}
                </p>
              </div>

              <div className="flex mt-4">
                <img
                  className="w-8 h-8 m-1"
                  src="https://cdn-icons-png.flaticon.com/128/1377/1377248.png"
                  alt="yelp"
                ></img>
                <img
                  className="w-8 h-8 m-1"
                  src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                  alt="instagram"
                ></img>
                <img
                  className="w-8 h-8 m-1"
                  src="https://cdn-icons-png.flaticon.com/128/355/355980.png"
                  alt="googlemap"
                ></img>
                <img
                  className="w-8 h-8 m-1"
                  src="https://cdn-icons-png.flaticon.com/128/552/552489.png"
                  alt="phone"
                ></img>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
