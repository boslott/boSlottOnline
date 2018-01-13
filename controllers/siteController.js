const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.home = (req, res) => {
  res.render('index', { title: 'Bo Slott Online '});
};

exports.about = (req, res) => {
  res.render('about', { title: 'About ' });
};

exports.services = (req, res) => {
  res.render('services', { title: 'Services ' });
};

exports.portfolio = (req, res) => {
  res.render('portfolio', { title: 'Portfolio ' });
};

exports.blog = (req, res) => {
  res.render('blog', { title: 'Blog ' });
};

exports.contact = (req, res) => {
  res.render('contact', { title: 'Contact ' });
};

exports.getProjectBySlug = async (req, res, next) => {
  const project = await Project.findOne({ slug: req.params.slug });
  if (!project) return next();
  res.render('projectDetails', { project, title: project.name });
};
