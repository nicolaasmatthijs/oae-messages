var messageAPI = require('./api.js');

module.exports = function(tenant) {
    
    tenant.server.get('/messages/send', function(req, res) {
        messageAPI.sendMessage(req.query.from, req.query.to, req.query.title, req.query.body);
        res.send(200);
    });

    tenant.server.get('/messages/list', function(req, res) {
        res.send(messageAPI.getMessages(req.query.userId));
    });
    
};