const mongoose = require('mongoose');
const Project = mongoose.model('Project');
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


exports.dashboard = (req, res) => {
  res.render('adminDash');
};

exports.portfolioAdmin = (req, res) => {
  res.render('portfolioAdmin', { title: 'Portfolio Admin '});
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
  await photo.write(`./public/images/uploads/${req.body.photo}`);
  // Once written to the filesystem, keep going!
  next();
};

exports.createPortfolioProject = async (req, res) => {
  const project = await (new Project(req.body)).save();
  req.flash('success', 'You have successfully uploaded a new project! 🔱 💻 🔱');
  res.redirect('/portfolio-admin');
};