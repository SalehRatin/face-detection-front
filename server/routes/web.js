const path = require("path");
const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/uploads");
  },
  filename: function (req, file, cb) {
    // rename the uploaded file
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );

    // original name
    // cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

const router = express.Router();

// Upload Image
router.post("/photo", upload.single("photo"), (req, res, next) => {
  return res.json({
    image: req.file.path,
  });
});

module.exports = router;
