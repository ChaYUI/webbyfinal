var express = require('express');
var app = express();
var mongo =require('mongodb');
var assert=require('assert');
var router=express.Router();

var url='mongodb:/localhost:27017/final';
//setting middleware
app.use(express.static(__dirname + '/public')); //Serves resources from public folder

var server = app.listen(8787);

var MongoClient = require('mongodb').MongoClient;
 
// Connect to the db
MongoClient.connect("mongodb://localhost:27017/camera", function (err, db) {
  if(err) throw err;
  //Write databse Insert/Update/Query code here..
  console.log('mongodb is running!');
  db.close(); //關閉連線
});
