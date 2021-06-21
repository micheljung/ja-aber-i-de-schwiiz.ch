import dynamic from "next/dynamic";
import React from "react";

export const comics = {
  "1": {title: "Kein Leid verursachen zu wollen ist extrem"},
  "2": {title: "Vegan zu sein belastet die Psyche"},
  "3": {title: "Autofahren tötet Insekten"},
  "4": {title: "Es reicht, Vegetarier zu sein"},
}

class ComicComponent extends React.Component {

  constructor(props) {
    super(props);
    this.comicElementId = `comic-${props.id}`;

    this.svgElement = null;
    this.setSvgElement = element => {
      this.svgElement = element;
    };
  }

  componentDidUpdate() {
    // this.svgElement.innerHTML.replace("&amp;", "&");
    console.log(this.svgElement)
  }

  render() {
    const Svg = this.loadComic(this.props.id)
    const title = comics[this.props.id].title
    const loader = <div className="aspect-h-1 aspect-w-1">
      <div></div>
    </div>;

    return (
      <div className="grid grid-col-1 gap-4 w-auto mx-1">
        {this.props.showTitle && (<h1 className="text-md xl:text-xl text-center font-bold">{title}</h1>)}
        <div className="mx-auto border border-black dark:border-gray-300 text-black dark:text-gray-300 xl:w-4/5">
          <Svg id={this.comicElementId} ref={this.setSvgElement}/>
        </div>
      </div>
    )
  }

  loadComic(id) {
    const loader = <div className="aspect-h-1 aspect-w-1">
      <div className="text-center flex flex-col justify-center" style={{position: "absolute"}}>
        Billige Comic ladet gli...
      </div>
    </div>;

    // Next.js requires hardcoded paths
    switch (id) {
      case "1":
        return dynamic(() => import("../comics/1.svg"), {loading: () => loader})
      case "2":
        return dynamic(() => import("../comics/2.svg"), {loading: () => loader})
      case "3":
        return dynamic(() => import("../comics/3.svg"), {loading: () => loader})
      case "4":
        return dynamic(() => import("../comics/4.svg"), {loading: () => loader})
      default:
        throw "Unknown ID: " + id
    }
  }
}

ComicComponent.defaultProps = {showTitle: true}
export default ComicComponent

