import React, { Component } from "react";
import "./App.css";
import Memes from "./components/memes";
import AddMeme from "./components/addMeme";

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
        <h1> Kaylins Meme Generator</h1>
        <AddMeme setMemes={this.handleSetMemes} />
        {/* {createdMeme.name && <button onClick={this.getMemes}>GET memes</button>}
        {create && <button onClick={this.getMemes}>GET memes</button>} */}

        <Memes setMemes={this.handleSetMemes} memes={this.state.memes} />
      </div>
    );
  }
}

export default App;
