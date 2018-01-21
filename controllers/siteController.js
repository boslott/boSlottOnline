const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const Post = mongoose.model('Post');

exports.home = (req, res) => {
  res.render('index', { title: 'Bo Slott Online '});
};

exports.about = (req, res) => {
  res.render('about', { title: 'About ' });
};

exports.services = (req, res) => {
  res.render('services', { title: 'Services ' });
};

exports.portfolio = async (req, res) => {
  const projects = await Project.find();
  res.render('portfolio', { title: 'Portfolio ', projects });
};

exports.getProjectBySlug = async (req, res, next) => {
  const project = await Project.findOne({ slug: req.params.slug });
  if (!project) return next();
  res.render('projectDetails', { project, title: project.name });
};

exports.blog = (req, res) => {
  res.render('blog', { title: 'Blog ' });
};

exports.getPostBySlug = async (req, res, next) => {
  const post = await Post.findOne({ slug: req.params.slug });
  if (!post) return next();
  res.render('postDetails', { post, title: post.title });
};

exports.contact = (req, res) => {
  res.render('contact', { title: 'Contact ' });
};


