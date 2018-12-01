var socket_io = require("socket.io");
var io = socket_io();
var socketApi = {};

socketApi.io = io;

// on : "connection"이라는 event가 발생하면 다음의 함수를 실행한다.
io.on("connection", function(socket) {
  socket.on("disconnect", function() {});
});

io.on("ddd", function(data) {
  console.log(data);
});

socketApi.changeEQSize = data => {
  //emit : "eqsize"라는 이벤트를 발생시킨다.
  io.sockets.emit("eqsize", data);
};
module.exports = socketApi;
