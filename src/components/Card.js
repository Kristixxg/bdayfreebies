import React, { useEffect } from "react";
import "./card.css";

function Card({ data }) {
  return (
    <div className="card">
      <div class="wrap animate pop">
        <div class="overlay">
          <div class="overlay-content animate slide-left delay-2 ">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <h3 class="animate-charcter">
                    {data.fields["name_of_place"]}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="image-content animate slide">
            <a>
              <img
                className="opacity-20 object-cover"
                alt="cover"
                src={data.fields.coverImage}
              ></img>
            </a>
          </div>
        </div>

        <div class="text flex flex-col items-end">
          <img className="inset" src={data.fields["coverImage"]} alt="" />
          <div className="flex flex-col items-end ">
            <h1 class="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 uppercase">
              {data.fields["name_of_place"]}
            </h1>

            <p className="text-xs max-w-[200px] text-right flex-wrap ">
              <img
                src="https://cdn-icons-png.flaticon.com/128/684/684908.png"
                alt="pin"
                className="inline w-3 h-3 mb-1 mr-1"
              ></img>
              {data.fields.address}
            </p>
            <p className="text-xs max-w-[200px] text-right flex-wrap ">
              Business Hours: {data.fields.hours}
            </p>

            <p className="mt-3 max-w-[200px] text-right flex-wrap  text-xs font-bold uppercase ">
              {data.fields.items}
            </p>
            <p className="text-xs max-w-[200px] text-right flex-wrap ">
              <em className="font-bold">*Conditions: </em>
              {data.fields.condition}
            </p>
          </div>

          <div className="flex mt-4">
            <a target="" href="https://www.yelp.com/">
              <img
                className="w-8 h-8 m-1 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/128/1377/1377248.png"
                alt="yelp"
              ></img>
            </a>
            <a target="_" href="https://www.instagram.com/">
              <img
                className="w-8 h-8 m-1 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png"
                alt="instagram"
              ></img>
            </a>
            <a target="" href="https://www.google.com/maps">
              <img
                className="w-8 h-8 m-1 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/128/355/355980.png"
                alt="googlemap"
              ></img>
            </a>
            <img
              className="w-8 h-8 m-1 cursor-not-allowed"
              src="https://cdn-icons-png.flaticon.com/128/552/552489.png"
              alt="phone"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
