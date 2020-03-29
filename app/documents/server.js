const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var mongoUri = process.env.MONGODB_URI;
console.log('Connecting to MongoDB at ' + mongoUri)

require('./models/invoiceModel');

mongoose.connect(mongoUri, {
    autoIndex: false, // Don't build indexes
    reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
    reconnectInterval: 500, // Reconnect every 500ms
    poolSize: 10, // Maintain up to 10 socket connections
    connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
}).then(() => {
    console.log("MongoDB connected");   
    
    
}).catch(err => {
    console.log('ERROR connecting to MongoDB!', err);
    process.exit();
});


var invoices = require('./routes/invoices');
app.use('/', invoices);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});