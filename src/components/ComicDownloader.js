import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const saveSvgAsPng = require('save-svg-as-png')

export default function ComicDownloader({comicElementId}) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  useEffect(() => setMounted(true), []);

  function download(scale) {

    let element = document.getElementById(`${comicElementId}`);
    saveSvgAsPng.saveSvgAsPng(element, `${comicElementId}-x${scale}.png`, {
      scale: scale,
      // backgroundColor: window.getComputedStyle(document.getElementsByTagName("body")[0]).backgroundColor,
      // backgroundColor: "white",
      // modifyCss: (selector, properties) => {
      //
      // }
      selectorRemap: (selector) => {
        console.log(selector)
        return selector
      }
    });
  }

  const DownloadButton = ({scale}) => {
    const text = `${1024 * scale}px`
    return <button className="flex-grow rounded bg-white dark:bg-transparent border dark:border-transparent dark:border-gray-700 py-2 px-2" onClick={() => download(scale)}>
      <span className="text-md">PNG</span> <span className="text-xs">{text}</span>
    </button>
  }

  return (
    <div className="flex flex-wrap gap-2 items-stretch mx-auto">
      <DownloadButton scale={0.5} />
      <DownloadButton scale={1} />
      <DownloadButton scale={2} />

    </div>
  )
}
