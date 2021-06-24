import React from 'react';
import DownloadIcon from '../../public/icons/download.svg'
import { useTheme } from 'next-themes';

const saveSvgAsPng = require('save-svg-as-png')

export default function ComicDownloader({comicElementId}) {
  const { resolvedTheme} = useTheme();

  function download(scale) {

    const element = document.getElementById(`${comicElementId}`);
    let backgroundColor = window.getComputedStyle(document.getElementsByTagName("body")[0]).backgroundColor
    if (backgroundColor === "rgba(0, 0, 0, 0)") {
      backgroundColor = "white";
    }

    saveSvgAsPng.saveSvgAsPng(element, `${comicElementId}-x${scale}-${resolvedTheme}.png`, {
      scale: scale,
      backgroundColor: backgroundColor,
      modifyStyle: (properties) => {
        return properties.replace(/currentColor/i, window.getComputedStyle(element).color);
      }
    });
  }

  const DownloadButton = ({scale}) => {
    const text = `${1024 * scale}px`
    return <button className="py-2 px-4 flex items-baseline rounded bg-white dark:bg-transparent border dark:border-transparent dark:border-gray-700 " onClick={() => download(scale)}>
      <DownloadIcon width="32" className="pr-2" />
      <span className="inline-block text-md pr-2">PNG</span>
      <span className="inline-block text-xs">{text}</span>
    </button>
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 w-full mx-auto">
      <DownloadButton scale={0.5} />
      <DownloadButton scale={1} />
      <DownloadButton scale={2} />

    </div>
  )
}
