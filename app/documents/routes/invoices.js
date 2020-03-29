var express = require("express");
// var async = require("async");
var router = express.Router();
var mongoose = require("mongoose");
var Invoice = mongoose.model("Invoice");


/* Default GET JSON for Mongo API */
router.get("/", function(req, res, next) {
  var response = { text: "Default endpoint for invoices"}
  res.json(response);
});

/* Get all items */
router.get("/all", function(req, res, next) {
  Invoice.find({})
    .then(function(items) {
      var response = items;
      res.json(response).status(200);
    })
    .catch(next);
});

module.exports = router;
