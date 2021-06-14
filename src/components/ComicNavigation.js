import ArrowIcon from "../../public/icons/arrow.svg";
import RandomIcon from "../../public/icons/random.svg";
import React from "react";
import {comics} from "./ComicComponent";
import {useRouter} from 'next/router'

export default function ComicNavigation({comicId}) {
  const router = useRouter()

  function randomComic() {
    const ids = Object.getOwnPropertyNames(comics)
    const url = ids[Math.floor(Math.random() * ids.length)]

    router.push(url, undefined)
  }

  function navigate(delta) {
    const ids = Object.getOwnPropertyNames(comics)
    const currentIdIndex = ids.indexOf(comicId)
    const url = ids[Math.max(0, (currentIdIndex + delta) % (ids.length))]

    router.push(url, undefined)
  }

  return <div className="flex flex-row justify-center gap-4 content-center">
    <button className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md p-2" onClick={() => navigate(-1)}>
      <ArrowIcon className="w-4 h-4" transform="scale(-1,1)"/>
    </button>
    <button className="h-8 w-12 bg-gray-200 dark:bg-gray-700 rounded-md px-3" onClick={() => randomComic()}>
      <RandomIcon className="w-6 h-6"/>
    </button>
    <button className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-md p-2" onClick={() => navigate(1)}>
      <div className="w-4 self-center">
        <ArrowIcon className="w-4 h-4"/>
      </div>
    </button>
  </div>
}
