const express = require("express");
const { request } = require("http");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

//serve static files from the public folder
app.use(express.static("Public"));

//route for the home page
app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "index.html"));
});

//route for the about page
app.get("/about", (request, response) => {
  response.sendFile(path.join(__dirname, "public", "about.html"));
});

//Start the server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/`);
});
