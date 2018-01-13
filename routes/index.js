const express = require('express');
const router = express.Router();
const siteController = require('../controllers/siteController');
const adminController = require('../controllers/adminController');
const { catchErrors } = require('../handlers/errorHandlers');


// Front-Side Routes
router.get('/', siteController.home);
router.get('/about', siteController.about);
router.get('/services', siteController.services);
router.get('/portfolio', siteController.portfolio);
router.get('/portfolio/details/:slug', catchErrors(siteController.getProjectBySlug));
router.get('/blog', siteController.blog);
router.get('/contact', siteController.contact);



// Admin Routes
router.get('/admin-bo', adminController.dashboard);
router.get('/portfolio-admin', adminController.portfolioAdmin);
router.post('/portfolio-admin',
  adminController.upload,
  catchErrors(adminController.resize),
  catchErrors(adminController.createPortfolioProject));

module.exports = router;