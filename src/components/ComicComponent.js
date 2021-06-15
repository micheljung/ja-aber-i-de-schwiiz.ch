import dynamic from "next/dynamic";
import React from "react";

export const comics = {
  "1": {title: "Kein Leid verursachen zu wollen, ist extrem"},
}

export default function ComicComponent({id, showTitle = true}) {
  const Svg = loadComic(id)
  const title = comics[id].title

  return (
    <div className="w-auto mx-1">
      {showTitle && (<h1 className="text-lg text-center font-bold">{title}</h1>)}
      <Svg className="border text-black dark:text-gray-300"/>
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
