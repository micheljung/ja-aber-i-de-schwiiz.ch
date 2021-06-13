import React from 'react'
import ComicComponent, {comics} from "../../components/ComicComponent";

export default function Comic({id}) {
  return (
    <div>
      <h1>Comic</h1>
      <ComicComponent id={id}/>
    </div>
  )
}

export async function getStaticPaths() {
  let paths = comics.map(comic => ({
    params: {
      id: comic.id
    }
  }))
  return {paths, fallback: false};
}

export async function getStaticProps({params}) {
  return {props: {id: params.id}}
}
