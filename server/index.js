const express = require("express");
const bodyParser = require("body-parser");
const memes = require("./controller/memes");
const randomPic = require("./controller/random_pic");
const app = express();

app.use(bodyParser.json());

app.get("/api/random", randomPic.read);

app.post("/api/memes", memes.create);
app.get("/api/memes", memes.read);
app.put("/api/memes/:id", memes.update);
app.delete("/api/memes/:id", memes.delete);

app.listen(4000, () => console.log("listening on port 4000"));
