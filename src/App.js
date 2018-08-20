import React, { Component } from "react";
import "./App.css";
import Memes from "./components/memes";
import AddMeme from "./components/addMeme";
import "./reset.css";

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      memes: []
    };
    this.handleSetMemes = this.handleSetMemes.bind(this);
  }

  handleSetMemes(memes) {
    this.setState({
      memes: memes
    });
  }

  render() {
    return (
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css?family=Arvo"
          rel="stylesheet"
        />
        <div className="main">
          <div className="head">
            <header>
              <h1 className="title"> Kaylins Meme Generator</h1>
            </header>
          </div>
          <div className="addMeme">
            <AddMeme setMemes={this.handleSetMemes} />
          </div>
          <div className="memeList">
            <Memes setMemes={this.handleSetMemes} memes={this.state.memes} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
