const express = require("express");
const app = express();
var cors = require("cors");
const path = require("path");

//middleware
app.use(cors());
app.use(express.json());

// video upload
const videoUpload = require("./Routers/imagesUpload");

app.use("/app/v1/video-upload", videoUpload);
app.use("/public", express.static(path.join(__dirname, "public")));

module.exports = app;
