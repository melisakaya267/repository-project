import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API çalışıyor");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});