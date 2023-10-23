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
  "17": {title: "Persönliches Vergnügen ist das höchste Gut"},
  "18": {title: "Schrödingers Kuh"},
  "19": {title: "Wer benötigt Kuhmilch"},
  "20": {title: "Vegan ist zu teuer"},
  "21": {title: "Nicht vegan zu sein ist nicht egoistisch"},
  "22": {title: "Kurt Zouma ist ein Tierquäler"},
  "23": {title: "Nur eine Auswahl möglich"},
  "24": {title: "Kleine Verwechslung, grosser Unterschied?"},
  "25": {title: "Hannibal: Pflanzen haben auch Gefühle"},
  "26": {title: "Supplemente sind unnatürlich"},
  "27": {title: "Wenn Sexualstraftäter wie Nicht-Veganer argumentierten"},
  "28": {title: "Rechte für Tiere sind völlig absurd"},
  "29": {title: "Tiere nicht auszubeuten ist lächerlich"},
  "30": {title: "Wir sind nun mal Spitzenprädatoren"},
  "31": {title: "Es muss sich politisch öppis ändere"},
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
const Comic17 = dynamic(() => import("../comics/17.svg"), comicOptions)
const Comic18 = dynamic(() => import("../comics/18.svg"), comicOptions)
const Comic19 = dynamic(() => import("../comics/19.svg"), comicOptions)
const Comic20 = dynamic(() => import("../comics/20.svg"), comicOptions)
const Comic21 = dynamic(() => import("../comics/21.svg"), comicOptions)
const Comic22 = dynamic(() => import("../comics/22.svg"), comicOptions)
const Comic23 = dynamic(() => import("../comics/23.svg"), comicOptions)
const Comic24 = dynamic(() => import("../comics/24.svg"), comicOptions)
const Comic25 = dynamic(() => import("../comics/25.svg"), comicOptions)
const Comic26 = dynamic(() => import("../comics/26.svg"), comicOptions)
const Comic27 = dynamic(() => import("../comics/27.svg"), comicOptions)
const Comic28 = dynamic(() => import("../comics/28.svg"), comicOptions)
const Comic29 = dynamic(() => import("../comics/29.svg"), comicOptions)
const Comic30 = dynamic(() => import("../comics/30.svg"), comicOptions)
const Comic31 = dynamic(() => import("../comics/31.svg"), comicOptions)

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
      case "17":
        return Comic17
      case "18":
        return Comic18
      case "19":
        return Comic19
      case "20":
        return Comic20
      case "21":
        return Comic21
      case "22":
        return Comic22
      case "23":
        return Comic23
      case "24":
        return Comic24
      case "25":
        return Comic25
      case "26":
        return Comic26
      case "27":
        return Comic27
      case "28":
        return Comic28
      case "29":
        return Comic29
      case "30":
        return Comic30
      case "31":
        return Comic31
      default:
        throw "Unknown ID: " + id
    }
  }
}

ComicComponent.defaultProps = {showTitle: true}
export default ComicComponent

