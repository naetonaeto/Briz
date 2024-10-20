// Back-end (Node.js)
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/briz', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).send('Invalid credentials');
  }
  // Handle login success
});