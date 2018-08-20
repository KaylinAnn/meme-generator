let memes = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const { url, title, name } = req.body;
    memes.push({ url, title, id, name });
    id++;
    res.status(200).send(memes);
  },

  read: (req, res) => {
    res.status(200).send(memes);
  },

  update: (req, res) => {
    const { title, url, name } = req.body;
    let index = memes.findIndex(meme => meme.id == req.params.id);
    let meme = memes[index];

    memes[index] = {
      url: url || meme.url,
      title: title || meme.title,
      id: meme.id,
      name: name || meme.name
    };

    res.status(200).send(memes);
  },

  delete: (req, res) => {
    let index = memes.findIndex(meme => meme.id == req.params.id);
    memes.splice(index, 1);
    res.status(200).send(memes);
  }
};
