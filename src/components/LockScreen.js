import React from "react";

function LockScreen() {
  let currentTimeDate = new Date();
  var hours = currentTimeDate.getHours();
  var minutes = currentTimeDate.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  var currentDay = weekday[currentTimeDate.getDay()];
  var currentDate = currentTimeDate.getDate();
  var currentMonth = month[currentTimeDate.getMonth()];
  var CurrentYear = currentTimeDate.getFullYear();

  return (
    <div class="h-full w-full hover:cursor-pointer bg-black rounded-[2.9rem] flex items-center justify-center border-box p-[0.5rem]">
      <div class="h-full w-full bg-[url(https://images.unsplash.com/photo-1620207418302-439b387441b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTk4MTAxNTF8&ixlib=rb-4.0.3&q=85)] bg-cover bg-center rounded-[2.4rem] flex items-center flex-col justify-between">
        <div class="w-full h-full flex flex-col items-center">
          <div class="w-[5rem] h-[1.4rem] bg-black mt-[0.5rem] rounded-full"></div>
          <span class="font-[Inter] opacity-60 text-white font-normal text-lg mt-8">
            {currentDay}, {currentMonth} {currentDate}
          </span>
          <span class="font-[Inter] opacity-60 text-white font-bold text-7xl mt-2 tracking-tighter">
            {hours}:{minutes}
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
