const express = require("express");
const bodyParser = require("body-parser");
const memes = require("./controller/memes");
const app = express();

app.use(bodyParser.json());

app.get("/api/memes", memes.read);
app.put("/api/memes/:id", memes.update);

app.listen(4000, () => console.log("listening on port 4000"));
