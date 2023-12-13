require("dotenv").config();
const app = require("./app");
require("dotenv").config();

// server
const port = process.env.PORT || 8000;

// testing api
app.get("/", async (req, res) => {
  res.send("Server is running!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
