import React from "react";
import { BANNER_IMG_URL } from "../config";

const GPTSearch = () => {
  return (
    <div className="relative flex justify-center">
      <img
        src={BANNER_IMG_URL}
        className="relative -z-10"
        alt="wall of movie and shows on netflix"
      />

      <form className="w-4/12 bg-black text-white absolute top-[20%] p-4 grid grid-cols-12 gap-2">
        <input
          className="col-span-9 p-2 bg-gray-600 text-sm"
          placeholder="What would you like to watch today?"
        />
        <button className="bg-red-600 py-2 rounded-lg col-span-3">
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearch;
