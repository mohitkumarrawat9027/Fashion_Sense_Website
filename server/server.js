require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;


app.use(express.json());
app.use(cors({
  origin: 'https://fashionsensewebsite.netlify.app',
  credentials: true
}));

app.use("/",require("./router/routes"));

// MongoDB connection string (replace with yours)
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



