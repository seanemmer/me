'use strict';

// Load the module dependencies
var config = require('../config'),
  path = require('path'),
  http = require('http'),
  socketio = require('socket.io');

// Define the Socket.io configuration method
module.exports = function (app, db) {
  var server;

  // Create a new HTTP server
  server = http.createServer(app);

  // Create a new Socket.io server
  var io = socketio.listen(server);

  // Add an event listener to the 'connection' event
  io.on('connection', function (socket) {
    config.files.server.sockets.forEach(function (socketConfiguration) {
      require(path.resolve(socketConfiguration))(io, socket);
    });
  });

  return server;
};
