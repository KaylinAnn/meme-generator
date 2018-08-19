import React, { Component } from "react";
import axios from "axios";

class MemeItem extends Component {
  render() {
    return (
      <li className="meme">
        {this.props.meme.name}
        <img src={this.props.meme.url} />
        {this.props.meme.text}
      </li>
    );
  }
}

export default MemeItem;
