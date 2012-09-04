var userAPI = require('oae-users');

var messageModel = require('./model.js');

// Temporarily cache our messages in memory
var messageCache = {};

// API functions
module.exports.sendMessage = function(from, to, title, body){
    from = UserService.getUser(from);
    var message = new messageModel.Message(from, to, title, body);
    messageCache[to] = messageCache[to] || [];
    messageCache[to].push(message);
};

module.exports.getMessages = function(userId){
    if (messageCache[userId]){
        return messageCache[userId];
    } else {
        return [];
    }
};