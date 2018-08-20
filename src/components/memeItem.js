import React, { Component } from "react";
import axios from "axios";

class MemeItem extends Component {
  deleteMeme() {
    axios.delete(`/api/memes/${this.props.meme.id}`).then(memes => {
      this.props.setMemes(memes.data);
    });
  }

  updateMeme() {
    axios
      .put(`/api/memes/${this.props.meme.id}`, { title: this.refs.title.value })
      .then(memes => {
        this.props.setMemes(memes.data);
      });
  }

  render() {
    return (
      <li className="meme">
        {this.props.meme.name}
        <img src={this.props.meme.url} />
        {this.props.meme.title}
        <button onClick={this.deleteMeme.bind(this)}>Delete Meme</button>
        <input type="text" ref="title" />
        <button onClick={this.updateMeme.bind(this)}>Update</button>
      </li>
    );
  }
}

export default MemeItem;
