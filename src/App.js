import React, { Component } from "react";
import "./App.css";
import Memes from "./components/memes";

import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      memes: [],
      oneMeme: {},
      newMeme: {},
      create: false
    };

    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.getRandomMeme();
  }

  getMemes() {
    axios.get("/api/memes").then(memes => {
      this.setState({
        memes: memes.data,
        oneMeme: [],
        create: false
      });
    });
  }

  getRandomMeme() {
    axios.get("/api/random").then(meme => {
      this.setState({
        newMeme: meme.data
      });
    });
  }

  createMeme() {
    let createdMeme = {
      url: this.state.newMeme.url,
      name: this.state.newMeme.name,
      title: this.state.newMeme.title
    };
    console.log(this.state.newMeme);
    axios.post("/api/memes", createdMeme).then(memes => {
      this.setState({
        memes: memes.data
      });
    });
  }

  handleInput(e) {
    if (this.refs.title.value === "") {
      alert("Title is required");
    } else {
      this.setState(
        {
          newMeme: {
            title: this.refs.title.value,
            url: this.state.newMeme.url,
            name: this.state.newMeme.name
          }
        },
        function() {
          this.createMeme();
          this.getRandomMeme();
        }
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h1> Kaylins Meme Generator</h1>
        <h3>Add Meme</h3>
        <img src={this.state.newMeme.url} alt="" />
        <div>
          <label>Title</label>
          <br />
          <input type="text" ref="title" />
        </div>
        <button onClick={this.handleInput}> Create </button>
        {/* {createdMeme.name && <button onClick={this.getMemes}>GET memes</button>}
        {create && <button onClick={this.getMemes}>GET memes</button>} */}

        <Memes memes={this.state.memes} />
      </div>
    );
  }
}

export default App;
