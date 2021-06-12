import React from "react";
import Link from "next/link";
import ComicComponent, {comics} from "../../components/ComicComponent";

export default function Comics({comics}) {
  return (
    <div>
      <h1>Comics</h1>
      <div className="flex flex-wrap gap-4">
        {comics.map((comic) => (
          <Link href={`/comics/${comic.id}`}><a>
            <div key={comic.id} className="flex flex-grow h-28 w-28 items-center space-x-4">
              <ComicComponent id={comic.id}/>
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
