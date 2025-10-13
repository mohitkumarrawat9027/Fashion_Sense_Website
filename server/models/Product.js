const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: String,
  imageUrl: String,
  buyLink: String,
  category: String,
  subcategory: String,
}, { timestamps: true }); // timestamps add createdAt, updatedAt

module.exports = mongoose.model('Product', productSchema);