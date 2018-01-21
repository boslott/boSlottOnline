const passport = require('passport');

exports.loginUser = passport.authenticate('local', {
  failureRedirect: '/admin-login',
  failureFlash: 'Failed Login!',
  successRedirect: '/admin-bo',
  successFlash: 'You are now logged in! 👏 👏 👏'
});

exports.logout = (req, res) => {
  req.logout();
  req.flash('success', 'You are now logged out! 😜');
  res.redirect('/admin-login');
};

exports.isLoggedIn = (req, res, next) => {
  if(req.isAuthenticated()) {
    next();
    return;
  }
  req.flash('error', 'Oops! You must be logged in to do that!');
  res.redirect('/admin-login');
};