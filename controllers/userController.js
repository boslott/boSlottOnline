const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');
const multer = require('multer');
const jimp = require('jimp'); // For resizing of photos
const uuid = require('uuid'); // Makes the files unique

const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter: (req, file, next) => {
    const isPhoto = file.mimetype.startsWith('image/');
    if (isPhoto) {
      next(null, true);
    } else {
      next({ message: 'That file type isn\'t allowed! '}, false);
    }
  }
};

// Saves the file into the memory of the server
exports.upload = multer(multerOptions).single('photo');

exports.resize = async (req, res, next) => {
  // Check if there is no new file to resize
  if (!req.file) {
    next(); // Skip to the next middleware
    return;
  }
  const extension = req.file.mimetype.split('/')[1];
  req.body.photo = `${uuid.v4()}.${extension}`;
  // Now resize
  const photo = await jimp.read(req.file.buffer);
  await photo.resize(1024, jimp.AUTO);
  await photo.write(`./public/images/uploads/userImgs/${req.body.photo}`);
  // Once written to the filesystem, keep going!
  next();
};

exports.login = (req, res) => {
  res.render('login', { title: 'Admin Login '});
};

exports.registration = (req, res) => {
  res.render('register', { title: 'New User Registration '});
};

exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name!').notEmpty();
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
    res.render('register', { title: 'New User Registration', body: req.body, flashes: req.flash() });
    return;
  }
  next();
};

exports.registerUser = async (req, res, next) => {
  const user = new User({
    email: req.body.email,
    name: req.body.name
  });
  const registerWithPromise = promisify(User.register, User);
  await registerWithPromise(user, req.body.password);
  next();
};