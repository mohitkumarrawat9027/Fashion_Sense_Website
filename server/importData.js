const mongoose = require('mongoose');
const Product = require('./models/Product');
const products = require('./Product_data/products.json'); // your JSON file with all products

const mongoURI = 'mongodb+srv://mkr9027:vxqgpg60hj9Oui7O@maindatabase.8d185kr.mongodb.net/dressing_sense';

mongoose.connect(mongoURI)
  .then(async () => {
    console.log('Connected to MongoDB');

    for (const prod of products) {
      await Product.findOneAndUpdate(
        { id: prod.id },  // filter by product id
        prod,             // update with this product data
        { upsert: true, new: true }  // create if not found
      );
      console.log(`Upserted product with id: ${prod.id}`);
    }

    console.log('All products imported/updated successfully');
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Error connecting or importing:', err);
    mongoose.disconnect();
  });
