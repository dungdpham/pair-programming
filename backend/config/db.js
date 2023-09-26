const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log('Hello from connectDB!');
};

module.exports = connectDB;
