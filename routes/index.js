var express = require("express");
var router = express.Router();
let socketApi = require("../socketApi");

format = function date2str(x, y) {
  let z = {
    M: x.getMonth() + 1,
    d: x.getDate(),
    h: x.getHours(),
    m: x.getMinutes(),
    s: x.getSeconds()
  };
  y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
    return ((v.length > 1 ? "0" : "") + eval("z." + v.slice(-1))).slice(-2);
  });

  return y.replace(/(y+)/g, function(v) {
    return x
      .getFullYear()
      .toString()
      .slice(-v.length);
  });
};

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/eqsize", function(req, res, next) {
  const data = {
    eqsize: req.body.eqsize,
    time: format(new Date(), "hh:mm:ss")
  };
  socketApi.changeEQSize(data);
  res.send("");
});

module.exports = router;
