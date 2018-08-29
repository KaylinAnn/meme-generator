import React, { Component } from "react";
import axios from "axios";

class AddMeme extends Component {
  constructor() {
    super();
    this.state = {
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
      this.props.setMemes(memes.data);
    });
  }

  handleInput() {
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
          this.refs.title.value = "";
        }
      );
    }
  }

  render() {
    return (
      <div className="App">
        <div className="addMemeMain">
          <h2>Add Meme</h2>
          <h3>{this.state.newMeme.name}</h3>
          <img className="createImg" src={this.state.newMeme.url} alt="" />
          <div className="caption">
            <label>Caption</label>
            <br />
            <input type="text" ref="title" placeholder="" />
          </div>
          <button className="createButton" onClick={this.handleInput}>
            Create
          </button>
        </div>
      </div>
    );
  }
}

export default AddMeme;
