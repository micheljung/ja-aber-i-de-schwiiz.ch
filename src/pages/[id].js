import React from 'react'
import ComicComponent, {comics} from "../components/ComicComponent";
import SocialMediaLink from "../components/SocialMediaLink";
import ComicNavigation from "../components/ComicNavigation";
import ComicDownloader from "../components/ComicDownloader";

export default function Comic({id = "1"}) {

  const comicElementId = `comic-${id}`

  return (
    <div>

      <main className="grid grid-cols-1 gap-4">

        <ComicNavigation comicId={id}/>
        <ComicComponent id={id} comicElementId={comicElementId}/>
        <ComicNavigation comicId={id}/>

        <ComicDownloader comicElementId={comicElementId}/>

        <div className="flex flex-wrap gap-4 mx-1 justify-center">

          <SocialMediaLink
            icon="/icons/instagram.svg"
            title="Instagram"
            description="Folge mir auf Instagram"
            url="https://www.instagram.com/ja.aber.i.de.schwiiz"
          />
          <SocialMediaLink
            icon="/icons/facebook.svg"
            title="Facebook"
            description="Folge mir auf Facebook"
            url="https://www.facebook.com/ja.aber.i.de.schwiiz"
          />
          <SocialMediaLink
            icon="/icons/youtube.svg"
            title="YouTube"
            description="Abonniere mich auf YouTube"
            url="https://www.youtube.com/channel/UC9O3PwuTOpMBfOA_7bgabZQ"
          />

        </div>

      </main>
    </div>
  )
}

export async function getStaticPaths() {
  let paths = Object.getOwnPropertyNames(comics).map(comicId => ({
    params: {
      id: comicId
    }
  }))
  return {paths, fallback: false};
}

export async function getStaticProps({params}) {
  return {props: {id: params.id}}
}
