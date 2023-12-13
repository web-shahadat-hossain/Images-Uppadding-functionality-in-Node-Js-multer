const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const videoUploadController = require("../Controllers/videoUpload");
const router = express.Router();

// Image upload configuration
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }

    if (!fs.existsSync("public/images")) {
      fs.mkdirSync("public/images");
    }

    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const imageUpload = multer({
  storage: imageStorage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);

    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".webp") {
      return cb(new Error("Only images are allowed!"));
    }

    cb(null, true);
  },
});


// // Image upload route
// router.post("/", imageUpload.single("images"), (req, res) => {
//   const { name } = req.body;
//   try {
//     let videosPaths = "";
//     if (req?.files?.images[0]?.path) {
//       videosPaths = req?.files?.images[0]?.path;
//     }
//     res.send({
//       status: 200,
//       message: "Successfully",
//       data: {
//         name,
//         videos: videosPaths,
//       },
//     });
//   } catch (err) {
//     res.status(400).send({
//       status: 400,
//       error: err.message,
//     });
//   }
// });


router
  .route("/")

  .post(
    imageUpload.fields([
      {
        name: "images",
        maxCount: 5,
      },
    ]),
    videoUploadController.create
  );


module.exports = router;
