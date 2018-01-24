const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.dashboard = (req, res) => {
  res.render('adminDash');
};



