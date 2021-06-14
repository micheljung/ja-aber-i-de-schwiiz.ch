import dynamic from "next/dynamic";
import React from "react";

export const comics = {
  "1": {title: "Tierische Produkte zu vermeiden ist extrem"},
}

export default function ComicComponent({id, showTitle = true}) {
  const Svg = loadComic(id)
  const title = comics[id].title

  return (
    <div className="flex-grow">
      {showTitle && (<h1>{title}</h1>)}
      <Svg className="text-black dark:text-gray-300"/>
    </div>
  )
}

function loadComic(id) {
  // Next.js requires hardcoded paths
  switch (id) {
    case "1":
      return dynamic(() => import("../comics/1.svg"))
    default:
      throw "Unknown ID: " + id
  }
}
