const express = require('express');
const router  = express.Router();

router.get('/books', (req, res, next) => {
  res.render('login');
});

router.get('/books/:bookId', (req, res, next) => {
  res.render('login');
});

module.exports = router;
