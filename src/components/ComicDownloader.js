import React from "react";

const saveSvgAsPng = require('save-svg-as-png')

export default function ComicDownloader({comicElementId}) {
  function download(scale) {
    let element = document.getElementById(`${comicElementId}`);
    saveSvgAsPng.saveSvgAsPng(element, `${comicElementId}-x${scale}.png`, {
      scale: scale,
      backgroundColor: 'white',
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