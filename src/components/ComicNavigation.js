import ArrowIcon from "../../public/icons/arrow.svg";
import RandomIcon from "../../public/icons/random.svg";
import React from "react";
import {comics} from "./ComicComponent";
import {useRouter} from 'next/router'

export default function ComicNavigation({comicId}) {
  const router = useRouter()

  let comicIds = Object.getOwnPropertyNames(comics);

  function randomComic() {
    const url = comicIds[Math.floor(Math.random() * comicIds.length)]

    router.push(url, undefined)
  }

  function navigate(delta) {
    const currentIdIndex = comicIds.indexOf(comicId)
    const url = comicIds[Math.max(0, Math.min(comicIds.length, currentIdIndex + delta))]

    router.push(url, undefined)
  }

  const index = comicIds.indexOf(comicId)

  return <div className="flex flex-row justify-center gap-4 content-center">
    <button disabled={index <= 0}
            className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md p-2 disabled:opacity-50"
            onClick={() => navigate(-1)}>
      <ArrowIcon className="w-4 h-4" transform="scale(-1,1)"/>
    </button>
    <button className="h-8 w-12 bg-gray-200 dark:bg-gray-700 rounded-md px-3" onClick={() => randomComic()}>
      <RandomIcon className="w-6 h-6"/>
    </button>
    <button disabled={index + 1 >= comicIds.length}
            className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md p-2 disabled:opacity-50"
            onClick={() => navigate(1)}>
      <div className="w-4 self-center">
        <ArrowIcon className="w-4 h-4"/>
      </div>
    </button>
  </div>
}
