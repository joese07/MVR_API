const express = require("express");
const router = require("./router");

const PORT = 8080;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("view engine", "ejs");

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
