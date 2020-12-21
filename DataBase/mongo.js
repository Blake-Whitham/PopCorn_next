const mongoose = require('mongoose');

const url = 'mongodb://localhost/movies';
// need to add authentication

const connect = () => mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

module.exports.db = db;
module.exports.connect = connect;
