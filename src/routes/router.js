var path = require("path");
var express = require("express"),
  router = express.Router();

router.get("/", function(req, res, next) {
  var msg = "";

  res.render("router", {
    title: "React.js"
  });
  // res.sendFile("../router.html", { root: path.join(__dirname, "src") });
  // res.sendFile("../router.html", { root: __dirname });
});

module.exports = router;
