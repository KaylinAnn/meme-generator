let memes = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { image, text } = req.body;
    memes.push({ image, text, id });
    id++;
    res.status(200).send(memes);
  },

  read: (req, res) => {
    res.status(200).send(memes);
  },

  update: (req, res) => {
    const { text, image } = req.body;
    let index = memes.findIndex(meme => meme.id == req.params.id);
    let meme = memes[index];

    memes[index] = {
      image: image || meme.image,
      text: text || meme.text,
      id: meme.id
    };

    res.status(200).send(memes);
  },

  delete: (req, res) => {
    let index = memes.findIndex(meme => meme.id == req.params.id);
    memes.splice(index, 1);
    res.status(200).send(memes);
  }
};
