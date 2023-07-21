const mongoose = require("mongoose");
// By using Schema , it will set up a structure for all the documents inside the collection
const TaskSchema = new mongoose.Schema({ name: String, completed: Boolean });
// Now start using the next line inside our controllers:
module.exports = mongoose.model("Task",TaskSchema);

// Instance of a model is called document (document in mongo is key-value pair)