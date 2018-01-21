const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

exports.login = (req, res) => {
  res.render('login', { title: 'Admin Login '});
};

exports.registration = (req, res) => {
  res.render('register', { title: 'Create New Admin '});
};

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('firstName');
  req.sanitizeBody('lastName');
  req.checkBody('firstName', 'You must supply a first name!').notEmpty();
  req.checkBody('lastName', 'You must supply a last name!').notEmpty();
  req.checkBody('email', 'That email is not valid!').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'Password cannot be blank!').notEmpty();
  req.checkBody('password-confirm', 'Confirm Password cannot be blank!').notEmpty();
  req.checkBody('password-confirm', 'Oops! Your passwords do not match!').equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    req.flash('error', errors.map(err => err.msg ));
    res.render('register', { title: 'Create New Admin', body: req.body, flashes: req.flash() });
    return;
  }
  next();
};

exports.registerUser = async (req, res, next) => {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  const registerWithPromise = promisify(User.register, User);
  await registerWithPromise(user, req.body.password);
  next();
};