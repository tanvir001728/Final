const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const medicine = new Schema({
  name:String,
  generic_name:String,
  strength:String,
  company:String,
  price:String,
  indication:String,
  description:String,
  doses:String,
  side_effect:String,
  precautions:String
});

module.exports = mongoose.model("medicine", medicine);