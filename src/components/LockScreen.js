import React from "react";

function LockScreen() {
  return (
    <div class="h-full w-full hover:cursor-pointer bg-black rounded-[2.9rem] flex items-center justify-center border-box p-[0.5rem]">
      <div class="h-full w-full bg-[url(https://images.unsplash.com/photo-1620207418302-439b387441b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk4MTAxNTF8&ixlib=rb-4.0.3&q=85)] bg-cover bg-center rounded-[2.4rem] flex items-center flex-col justify-between">
        <div class="w-full h-full flex flex-col items-center">
          <div class="w-[5rem] h-[1.4rem] bg-black mt-[0.5rem] rounded-full"></div>
          <span class="font-[Inter] opacity-60 text-white font-normal text-lg mt-8">
            Friday, August 12
          </span>
          <span class="font-[Inter] opacity-60 text-white font-bold text-7xl mt-2 tracking-tighter">
            17:00
          </span>
        </div>

        <div class="w-full flex flex-col items-center">
          <span class="text-white opacity-60 mb-2 text-sm">
            Click to unlock
          </span>
          <div class="bg-white opacity-60 w-[5rem] h-[0.2rem] bg-black mb-8 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default LockScreen;
