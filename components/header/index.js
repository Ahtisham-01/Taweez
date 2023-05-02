import Link from "next/link";
import React from "react";
const Index = ({ title }) => {
  return (
    <div className="py-4 w-full flex justify-center flex-col items-center">
      <div className="f-a-l py-4 font-thin text-xl tracking-[0.3em] text-neutral-600">
        EVERYTHING IS PROFESSIONAL. INCLUDING THIS.
      </div>
      <div className="f-a-l font-bold text-9xl tracking-wider text-neutral-700 pt-8">
        Train of mind
      </div>

      <div className="border-b border-neutral-600 w-[98%] pt-12" />
      <div className="flex justify-start w-full max-w-[960px] m-auto">
        {" "}
        <button
          class="btn2 border-l border-b  border-r py-7 !px-20 f-a-l border-neutral-600 relative    overflow-hidden "
          type="button"
        >
          <span class="absolute inset-0 bg-neutral-400"></span>
          <span class="absolute inset-0 flex justify-center items-center hover:text-white f-a-l">
            Home
          </span>
        </button>
        <button
          class="btn2 border-b border-r py-7 px-20 f-a-l border-neutral-600 relative    overflow-hidden "
          type="button"
        >
          <span class="absolute inset-0 bg-neutral-400"></span>
          <span class="absolute inset-0 flex justify-center items-center hover:text-white f-a-l">
            About
          </span>
        </button>
        <button
          class="btn2 border-b  py-3 px-20 f-a-l border-neutral-600 relative    overflow-hidden "
          type="button"
        >
          <span class="absolute inset-0 bg-neutral-400"></span>
          <span class="absolute inset-0 flex justify-center items-center hover:text-white f-a-l">
          Our Collection
          </span>
        </button>
        <button
          class="btn2  border-b  border-l py-3 px-20 f-a-l border-neutral-600 relative    overflow-hidden "
          type="button"
        >
          <span class="absolute inset-0 bg-neutral-400"></span>
          <span class="absolute inset-0 flex justify-center items-center hover:text-white f-a-l">
          Contribute
          </span>
        </button>
        <button
          class="btn2 border-l border-r border-b  py-3 px-20 f-a-l  border-neutral-600 relative    overflow-hidden "
          type="button"
        >
          <span class="absolute inset-0 bg-neutral-400"></span>
          <span class="absolute inset-0 flex justify-center items-center hover:text-white f-a-l">
          Search
          </span>
        </button>
        <button
          class="btn2 border-b border-r py-3 px-20 f-a-l border-neutral-600 relative    overflow-hidden "
          type="button"
        >
          <span class="absolute inset-0 bg-neutral-400"></span>
          <span class="absolute inset-0 flex justify-center items-center hover:text-white f-a-l">
          Contact
          </span>
        </button>

      </div>
    </div>
  );
};
export default Index;
