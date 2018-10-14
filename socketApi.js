var socket_io = require("socket.io");
var io = socket_io();
var socketApi = {};

socketApi.io = io;

io.on("connection", function(socket) {
  socket.on("disconnect", function() {});
});
io.on("ddd", data => {
  console.log(data);
});
socketApi.changeEQSize = data => {
  console.log(data);
  io.sockets.emit("eqsize", data);
};
module.exports = socketApi;
