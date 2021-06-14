import ArrowIcon from "../../public/icons/arrow.svg";
import RandomIcon from "../../public/icons/random.svg";
import React from "react";

export default function ComicNavigation() {
  return <div className="flex flex-row h-12 justify-center gap-4 content-center">
    <button className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md p-2">
      <ArrowIcon className="w-4 h-4" transform="scale(-1,1)"/>
    </button>
    <button className="h-8 w-12 bg-gray-200 dark:bg-gray-700 rounded-md px-3">
      <RandomIcon className="w-6 h-6"/>
    </button>
    <button className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md p-2">
      <div className="w-4 self-center">
        <ArrowIcon className="w-4 h-4"/>
      </div>
    </button>
  </div>
}
