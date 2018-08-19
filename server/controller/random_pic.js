const axios = require("axios");

module.exports = {
  read: (req, res) => {
    axios.get("https://api.imgflip.com/get_memes").then(response => {
      const index = Math.floor(Math.random() * 100);
      const memes = response.data.data.memes;
      res.status(200).send(memes[index]);
    });
  }
};
