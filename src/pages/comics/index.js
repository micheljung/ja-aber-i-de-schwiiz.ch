import React from "react";
import Link from "next/link";
import ComicComponent, {comics} from "../../components/ComicComponent";

export default function Comics() {
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {Object.getOwnPropertyNames(comics).map((comicId) => (
          <Link key={comicId} href={`/comics/${comicId}`}><a>
            <div className="flex flex-grow h-28 w-28 items-center space-x-4">
              <ComicComponent id={comicId} showTitle={false}/>
            </div>
          </a></Link>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      comics: comics,
    },
  }
}
