import React, { Component } from "react";
import MemeItem from "./memeItem";
import axios from "axios";

class Memes extends Component {
  render() {
    let memeItem;
    if (this.props.memes) {
      memeItem = this.props.memes.map(meme => {
        return <MemeItem key={meme.id} meme={meme} />;
      });
    }
    return <div className="memes">{memeItem}</div>;
  }
}

export default Memes;
