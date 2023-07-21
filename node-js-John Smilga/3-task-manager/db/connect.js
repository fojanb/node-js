const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url);
};
// Database
// Collections in monogoDB are tables in regular database
// Documents are simple key-value pairs (data)
// Schema (structure for documents(data))
module.exports = connectDB;