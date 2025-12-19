import express from "express";

const app = express();
const PORT = process.env.PORT || 1616;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
