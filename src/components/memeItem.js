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
      <ul className="meme">
        <div> {this.props.meme.name}</div>
        <img src={this.props.meme.url} />
        <div>{this.props.meme.title}</div>
        <div className="editInfo">
          <button className="deleteButton" onClick={this.deleteMeme.bind(this)}>
            Delete Meme
          </button>
          <input type="text" ref="title" />
          <button className="updateButton" onClick={this.updateMeme.bind(this)}>
            Update
          </button>
        </div>
      </ul>
    );
  }
}

export default MemeItem;
