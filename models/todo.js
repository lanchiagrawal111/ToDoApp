const mongoose = require("mongoose");
//create schema
const ListSchema = new mongoose.Schema({
   description: {
    type: String,
    required: true,
  },
   category: {
    type: String,
    required: true,
  },
  date:{
      type: Date,
      require: true
  },

});
//create collection
const Todo = mongoose.model('Todo', ListSchema);
// export
module.exports = Todo;
