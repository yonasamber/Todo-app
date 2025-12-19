import express from "express";

const app = express();
const PORT = process.env.PORT || 1616;
console.log("hithere");

app.get("/", (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
