import React from "react";
import path from "path";
import {promises as fs} from "fs";
import Link from "next/link";


export default function Comics({comics}) {
  return (
    <div>
      <h1>Comics</h1>
      <ul>
        {comics.map((comic) => (
          <li key={comic.filename}>
            <h3>{comic.filename}</h3>
            <p>{comic.path}</p>
            <Link href={`/comics/${comic.path}`}><a>{comic.path}</a></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const comicsDirectory = path.join(process.cwd(), 'src/comics')
  const filenames = await fs.readdir(comicsDirectory)
  console.log(filenames)
  const comics = filenames.map(async (filename) => {
    const filePath = path.join(comicsDirectory, filename)

    return {filename, path: filename.substring(0, filename.lastIndexOf('.'))}
  })

  return {
    props: {
      comics: await Promise.all(comics),
    },
  }
}
