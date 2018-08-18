const hardcodedMemes = [
  {
    image: "",
    text: "Use the approved poses if you wanna be a memer!",
    id: 420
  },
  {
    image: "",
    text: "We're bout to get shwifty in here!",
    id: 421
  },
  {
    image: "",
    text: "peace sign bunny ears... fake weiner!",
    id: 422
  }
];

module.exports = {
  create: (req, res) => {},

  read: (req, res) => {
    res.status(200).send(hardcodedMemes);
  },

  update: (req, res) => {
    const { text } = req.body;
    let index = hardcodedMemes.findIndex(meme => meme.id == req.params.id);
    console.log(index);
    let meme = hardcodedMemes[index];

    hardcodedMemes[index] = {
      image: meme.image,
      text: text || meme.text,
      id: meme.id
    };

    res.status(200).send(hardcodedMemes);
  },

  delete: (req, res) => {}
};
