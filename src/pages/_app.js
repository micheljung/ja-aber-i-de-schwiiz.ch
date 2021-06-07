import { ThemeProvider } from 'next-themes'
import React from "react";
import 'tailwindcss/tailwind.css'
import '../styles.css';
import DarkModeButton from "../components/DarkModeButton";

function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DarkModeButton/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
