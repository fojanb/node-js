const mongoose = require("mongoose");
// By using Schema , it will set up a structure for all the documents inside the collection
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide a name"],
    trim: true,
    maxlength: [20, "Name can not be more than 20 characters"]
  },
  completed: { type: Boolean, default: false }
});
// Now start using the next line inside our controllers:
module.exports = mongoose.model("Task", TaskSchema);

// Instance of a model is called document (document in mongo is key-value pair)
