var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');
var Pusher = require('pusher');
var pusher = new Pusher({
  appId: '90418',
  key: 'f9e98574fc8ffef7853e',
  secret: 'e8b6a0be061e52662086'
});

module.exports = function (app) {
  app.use('/', router);
};


router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Pusher Demo',
    });
});

router.post('/message/new', function (req, res, next) {
	pusher.trigger('mychannel', 'new_message', {
  "message": req.body.message
	});
});
