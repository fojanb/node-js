const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("First -> Connected to mongoDB...");
  return mongoose.connect(url);
};
// Database
// Collections in monogoDB are tables in regular database
// Documents are simple key-value pairs (data), "rows" on reqular database
// Schema (structure for documents(data))
module.exports = connectDB;