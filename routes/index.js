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
  //ee = "3.4~4.0"
  var ee = req.body.eqsize;
  var eqsize;
  if(ee == "3.4~4.0") {
    eqsize = "3.7";
  } else if (ee == "4.1~5.0") {

  } else if (ee == "5.1~6.0") {

  } else if (ee == "6.1~7.0") {

  } else {
    
  }
  var eeList = ee.split("~"); // ["3.4", "4.0"]


  const data = {
    eqsize: eqsize,
    time: format(new Date(), "hh:mm:ss")
  };

  socketApi.changeEQSize(data);
  res.send("");
});

module.exports = router;
