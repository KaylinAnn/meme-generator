import React, { Component } from "react";
import axios from "axios";

class MemeItem extends Component {
  deleteMeme() {
    axios.delete(`/api/memes/${this.props.meme.id}`).then(memes => {
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
      </li>
    );
  }
}

export default MemeItem;
