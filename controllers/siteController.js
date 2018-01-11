

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
