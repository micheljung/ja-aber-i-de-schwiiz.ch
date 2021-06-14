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

      <div className="flex flex-col min-h-screen">
        <header className="flex flex-row">
          <div className="title dark:text-gray-200 flex flex-wrap flex-grow content-center">
            Ja, aber i de Schwiiz...
          </div>
          <DarkModeButton/>
        </header>

        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}

export default App
