import express from "express";
const app = express();
const port = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/contacts", (req, res) => {
  return res.status(200).json({ msg: "hellow nabaraj" });
});
app.get("/person", (req, res) => {
  return res.status(200).json({ msg: "hellow person" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
