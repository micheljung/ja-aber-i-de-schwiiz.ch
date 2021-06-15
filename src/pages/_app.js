import {ThemeProvider} from 'next-themes'
import React from "react";
import 'tailwindcss/tailwind.css'
import '../styles.css';
import DarkModeButton from "../components/DarkModeButton";
import Head from "next/head";

function App({Component, pageProps}) {
  return (
    <ThemeProvider attribute="class">

      <Head>
        <title>Ja, aber i de Schwiiz...</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="flex flex-col min-h-screen overflow-x-hidden gap-4 max-w-4xl mx-auto">
        <header className="flex flex-row h-16 gap-2">
          <img src="/icons/avatar_circle.svg" className=" h-full my-auto p-2"/>
          <div className="flex-grow title dark:text-gray-200 my-auto font-bold">
            Ja, aber i de Schwiiz...
          </div>
          <div className="my-auto">
            <DarkModeButton/>
          </div>
        </header>

        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default App
