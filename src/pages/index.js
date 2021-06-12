import Head from 'next/head'
import React from "react";
import DarkModeButton from "../components/DarkModeButton";
import ComicComponent from "../components/ComicComponent";
import RandomIcon from "../../public/icons/random.svg"
import ArrowIcon from "../../public/icons/arrow.svg"
import SocialMediaLink from "../components/SocialMediaLink";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Ja, aber i de Schwiiz...</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <header className="flex flex-row">
        <div className="title dark:text-gray-200 flex flex-wrap flex-grow content-center">
          Ja, aber i de Schwiiz...
        </div>
        <DarkModeButton/>
      </header>

      <main className="flex-auto p-2">


        <div className="mx-auto lg:w-1/2">
          <div className="flex flex-row h-16 justify-center gap-4 content-center">
            <button className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-md p-4">
                <ArrowIcon className="w-8 h-6" transform="scale(-1,1)"/>
            </button>
            <button className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-md p-4">
                <RandomIcon className="w-8 h-8"/>
            </button>
            <button className="h-16 w-16 bg-gray-200 dark:bg-gray-700 rounded-md p-4">
              <div className="w-4 self-center">
                <ArrowIcon className="w-8 h-6"/>
              </div>
            </button>
          </div>

          <ComicComponent id={1}/>
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
        <div className="flex justify-center text-gray-400 p-4">
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
