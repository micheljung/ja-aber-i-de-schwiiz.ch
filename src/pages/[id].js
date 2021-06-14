import React from 'react'
import ComicComponent, {comics} from "../components/ComicComponent";
import Head from "next/head";
import DarkModeButton from "../components/DarkModeButton";
import ArrowIcon from "../../public/icons/arrow.svg";
import RandomIcon from "../../public/icons/random.svg";
import SocialMediaLink from "../components/SocialMediaLink";
import ComicNavigation from "../components/ComicNavigation";
import CreativeCommons from "../components/CreativeCommons";

export default function Comic({id = "1"}) {

  return (
    <div className="flex flex-col min-h-screen">

      <main className="grid grid-cols-1 p-2 gap-4">

        <div className="mx-auto lg:w-1/2 h-96">
          <ComicNavigation comicId={id} />
          <ComicComponent id={id}/>
          <ComicNavigation comicId={id} />
        </div>

        <div className="flex flex-wrap gap-4">

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

      <footer>
        <CreativeCommons />

        <div className="flex justify-center text-gray-400">
          Quelltext auf&nbsp;<a
          href="https://github.com/micheljung/ja-aber-i-de-schwiiz.ch"
          target="_blank"
          rel="noopener noreferrer"
        >GitHub</a>
        </div>
      </footer>
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
