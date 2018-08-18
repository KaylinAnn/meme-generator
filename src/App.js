import React, { Component } from "react";
import "./App.css";
// import axios from "axios";

// let appConfig = {
//   headers: {
//     apikKey: "sh4mefulCr4b"
//   }
// };

// const baseUrl = "https://api.imgflip.com/caption_image";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <div />
        </header>
        <main>
          <h1>Kaylin's Meme Generator</h1>
          <ul>
            {/* {this.state.images.map(image => (
              <li key={image.id}>{image}</li>
            ))} */}
          </ul>
        </main>
      </div>
    );
  }
}

export default App;
