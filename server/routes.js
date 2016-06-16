'use strict';

var express = require('express');
var router = express.Router();
var _ = require('lodash');
var fs = require('fs');
var databasePath = __dirname + '/database.json';
// API routes

router.get('/api', function(req, res){
  // Read in the database
  fs.readFile(databasePath, function(err, data){
    if (err) {console.log(err); }
    // Send a response
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.write(data);
    res.end();
  });
});

router.post('/api', function(req, res){
  var newTodo = req.body;
  fs.readFile(databasePath, function(err, data){
    if (err) {console.log(err); }
    // Parse data from a string
    var parsedData = JSON.parse(data);
    if (!parsedData) {console.log('Database is corrupted!!')}
    // Add a new item to the database
    parsedData.push(newTodo);
    // Convert the database back into a string
    var newDBString = JSON.stringify(parsedData);
    fs.writeFile(databasePath, newDBString, function(err){
      if (err) {console.log(err); }
      // Respond to Client
      res.writeHead(200, {'Content-Type': 'text/json'});
      res.write(newDBString);
      res.end();
    });
  });
});

router.get('/*', function indexRouteHandler (req, res) {
  res.render('view', {
    title: "Website Example",
    token: _.uniqueId()
  });
});



module.exports = router;