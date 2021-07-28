import dynamic from "next/dynamic";
import React from "react";
import Head from "next/head";

export const comics = {
  "1": {title: "Kein Leid verursachen zu wollen ist extrem"},
  "2": {title: "Vegan zu sein belastet die Psyche"},
  "3": {title: "Autofahren tötet Insekten"},
  "4": {title: "Es reicht, Vegetarier zu sein"},
  "5": {title: "Esst doch einfach richtiges Fleisch"},
  "6": {title: "Vegane Propaganda"},
  "7": {title: "Menschen sind einfach Fleischfresser"},
  "8": {title: "Wir jagen mit Intelligenz"},
  "9": {title: "Tote Körper zu essen ist völlig normal"},
  "10": {title: "Wer Leben schenkt, darf es auch wieder nehmen"},
  "11": {title: "Holocaust-Vergleiche sind völlig daneben"},
  "12": {title: "Tierquälerei ist situativ"},
  "13": {title: "Man kann jemanden lieben und trotzdem töten"},
  "14": {title: "Nicht-Veganer sind konsequent"},
  "15": {title: "Selbsterklärend"},
  "16": {title: "Schlachthofskandal"},
}

const comicOptions = {loading: () => <div className="aspect-h-1 aspect-w-1">
    <div className="text-center flex flex-col justify-center" style={{position: "absolute"}}>
      Billige Comic ladet gli...
    </div>
  </div>}

// Next.js requires hardcoded paths
const Comic1 = dynamic(() => import("../comics/1.svg"), comicOptions)
const Comic2 = dynamic(() => import("../comics/2.svg"), comicOptions)
const Comic3 = dynamic(() => import("../comics/3.svg"), comicOptions)
const Comic4 = dynamic(() => import("../comics/4.svg"), comicOptions)
const Comic5 = dynamic(() => import("../comics/5.svg"), comicOptions)
const Comic6 = dynamic(() => import("../comics/6.svg"), comicOptions)
const Comic7 = dynamic(() => import("../comics/7.svg"), comicOptions)
const Comic8 = dynamic(() => import("../comics/8.svg"), comicOptions)
const Comic9 = dynamic(() => import("../comics/9.svg"), comicOptions)
const Comic10 = dynamic(() => import("../comics/10.svg"), comicOptions)
const Comic11 = dynamic(() => import("../comics/11.svg"), comicOptions)
const Comic12 = dynamic(() => import("../comics/12.svg"), comicOptions)
const Comic13 = dynamic(() => import("../comics/13.svg"), comicOptions)
const Comic14 = dynamic(() => import("../comics/14.svg"), comicOptions)
const Comic15 = dynamic(() => import("../comics/15.svg"), comicOptions)
const Comic16 = dynamic(() => import("../comics/16.svg"), comicOptions)

class ComicComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const Svg = this.loadComic(this.props.id)
    const title = comics[this.props.id].title

    return (
      <div className="grid grid-col-1 gap-4 w-auto mx-1">
        <Head>
          <title>JAIDS: {title}</title>
        </Head>
        {this.props.showTitle && (<h1 className="text-md xl:text-xl text-center font-bold">{title}</h1>)}
        <div className="border border-black dark:border-gray-300 text-black dark:text-gray-300 xl:mx-auto xl:w-4/5">
          <Svg id={this.props.comicElementId} />
        </div>
      </div>
    )
  }

  loadComic(id) {
    switch (id) {
      case "1":
        return Comic1
      case "2":
        return Comic2
      case "3":
        return Comic3
      case "4":
        return Comic4
      case "5":
        return Comic5
      case "6":
        return Comic6
      case "7":
        return Comic7
      case "8":
        return Comic8
      case "9":
        return Comic9
      case "10":
        return Comic10
      case "11":
        return Comic11
      case "12":
        return Comic12
      case "13":
        return Comic13
      case "14":
        return Comic14
      case "15":
        return Comic15
      case "16":
        return Comic16
      default:
        throw "Unknown ID: " + id
    }
  }
}

ComicComponent.defaultProps = {showTitle: true}
export default ComicComponent

