import React from 'react'
import dynamic from 'next/dynamic'

const files = [
  {id: "c1_extrem", path: "../../comics/c1_extrem.svg"}
]

export default function Comic({id}) {
  const ComicComponent = loadComic(id)

  return (
    <div>
      <h1>Comic</h1>
      <div className="comicWrapper">
      <ComicComponent className="comic" />
      </div>
    </div>
  )
}

function loadComic(id) {
  switch (id) {
    case "c1_extrem":
      return dynamic(() => import("../../comics/c1_extrem.svg"))
    default:
      return 404
  }
}

export async function getStaticPaths() {
  let paths = files.map(file => ({
    params: {
      id: file.id
    }
  }))
  return {paths, fallback: false};
}

export async function getStaticProps({params}) {
  return {props: {id: params.id}}
}
