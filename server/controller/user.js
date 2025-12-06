require('dotenv').config();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtsecret = process.env.JWT_SECRET;

const generateToken = (user) => {
  return jwt.sign({ id: user._id }, jwtsecret, { expiresIn: "1h" });
};


const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    const token = generateToken(newUser);
    return res.status(201).json({ token });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Internal Error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const token = generateToken(user);
    return res.status(200).json({ token });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server Internal Error" });
  }
};

module.exports = { registerUser, loginUser };