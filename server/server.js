require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');

const app = express();
const PORT = process.env.PORT || 5001;


// Middleware
app.use(cors({
  origin: '*'
}));

app.use(express.json());

// MongoDB connection string (replace with yours)
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// let isConnected=false;
//  async function connectToMongoDB(){
//   await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error('MongoDB connection error:', err));
//  }

// GET /products?category=topwear&subcategory=tshirts
app.get('/products', async (req, res) => {
  try {
    const { category, subcategory } = req.query;
    const filter = {};
    if (category) filter.category = category;
    if (subcategory) filter.subcategory = subcategory;

    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// // POST /products
// app.post('/products', async (req, res) => {
//   try {
//     const newProduct = new Product(req.body);
//     const savedProduct = await newProduct.save();
//     res.status(201).json(savedProduct);
//   } catch (err) {
//     res.status(400).json({ message: 'Invalid data' });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

