import React from "react";
import Comic from "./[id]";
import {comics} from "../components/ComicComponent";

export default function Home() {
  const comicIds = Object.getOwnPropertyNames(comics);
  const lastId = comicIds[comicIds.length - 1];
  return <Comic id={lastId}/>
}
