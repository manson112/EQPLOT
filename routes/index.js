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
  var eqsize = req.body.eqsize;

  if (eqsize == "0~3.0") {
    eqsize = Math.random() * 3;
  } else if (eqsize == "3.0~3.3") {
    eqsize = (Math.random() * 3 + 30) / 10.0;
  } else if (eqsize == "3.4~3.9") {
    eqsize = (Math.random() * 5 + 34) / 10.0;
  } else if (eqsize == "4.0~6.0") {
    eqsize = Math.random() * 2 + 4;
  } else if (eqsize == "8.0") {
    eqsize = Math.random() * 4 + 6;
  } else {
  }
  eqsize.toFix(1);
  console.log(eqsize);

  const data = {
    eqsize: eqsize,
    time: format(new Date(), "hh:mm:ss")
  };

  socketApi.changeEQSize(data);
  res.send("");
});

module.exports = router;
