import React, { useState } from "react";
import LockScreen from "./LockScreen";
import Landing from "./Landing";

function Phone() {
  const [lock, setLock] = useState(true);

  return (
    <div
      onClick={() => setLock(false)}
      class="w-[345.6px] h-[710.4px] bg-gradient-to-b from-blue-100 to-blue-200 border border-blue-300 rounded-[3rem] flex items-center justify-center border-box p-[0.2rem] relative shadow-[1rem_1rem_6rem_rgba(0,0,0,0.4),0_0_0.1rem_rgba(0,0,0,0.4)]"
    >
      <>
        <div class=" overflow-x-hidden w-[0.375rem] h-[7.5rem] rounded-[0_0.15rem_0.15rem_0] bg-gradient-to-r from-neutral-400 via-blue-300 to-blue-300 border-r border-blue-100 absolute -right-1 top-[30%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]"></div>
        <div class="w-[0.375rem] h-[3.75rem] rounded-[0_0.15rem_0.15rem_0] bg-gradient-to-l from-neutral-400 via-blue-300 to-blue-300 border-l border-blue-100 absolute -left-1 top-[38%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]"></div>
        <div class="w-[0.375rem]  h-[3.75rem] rounded-[0_0.15rem_0.15rem_0] bg-gradient-to-l from-neutral-400 via-blue-300 to-blue-300 border-l border-blue-100 absolute -left-1 top-[28%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]"></div>
        <div class="w-[0.375rem] h-[1.875rem] rounded-[0_0.15rem_0.15rem_0] bg-gradient-to-l from-neutral-400 via-blue-300 to-blue-300 border-l border-blue-100 absolute -left-1 top-[20%] shadow-[2px_0_1px_rgba(0,0,0,0.2)_inset]"></div>
      </>
      {lock ? <LockScreen /> : <Landing />}
    </div>
  );
}

export default Phone;
