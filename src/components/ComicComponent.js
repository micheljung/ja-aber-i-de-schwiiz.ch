import dynamic from "next/dynamic";
import React from "react";

export const comics = [
  {id: "1", path: "../../comics/1.svg"},
]

export default function ComicComponent({id, title, description}) {
  const Svg = loadComic(id)

  return (
    <div>
      <h1>{title}</h1>
      <Svg className="text-black dark:text-gray-300"/>
    </div>
  )
}

function loadComic(id) {
  switch (id) {
    case "1":
      return dynamic(() => import("../comics/1.svg"))
    default:
      throw "Unknown ID: " + id
  }
}
