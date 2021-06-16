import dynamic from "next/dynamic";
import React from "react";

export const comics = {
  "1": {title: "Kein Leid verursachen zu wollen ist extrem"},
  "2": {title: "Vegan zu sein belastet die Psyche"},
}

export default function ComicComponent({id, showTitle = true}) {
  const Svg = loadComic(id)
  const title = comics[id].title

  return (
    <div className="grid grid-col-1 gap-4 w-auto mx-1">
      {showTitle && (<h1 className="text-md xl:text-xl text-center font-bold">{title}</h1>)}
      <Svg id={`comic-${id}`} className="mx-auto border border-black dark:border-gray-300 text-black dark:text-gray-300 xl:w-4/5 "/>
    </div>
  )
}

function loadComic(id) {
  // Next.js requires hardcoded paths
  switch (id) {
    case "1":
      return dynamic(() => import("../comics/1.svg"))
    case "2":
      return dynamic(() => import("../comics/2.svg"))
    default:
      throw "Unknown ID: " + id
  }
}
