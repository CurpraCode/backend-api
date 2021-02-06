const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  desc: {
    type: String,
    required: [true, "Field can't be blank"],
  },
  images: {
    type: String,
  },
  categories: {
    type: String,
    required: [true, "Please select a category"],
  },
  price: {
    type: Number,
    required: true,
  },
  saleprice: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
