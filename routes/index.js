const express = require('express');
const Book = require('../models/book');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/books', (req, res, next) => {
  Book.find({})
    .then(books => {
      console.log('DEBUG books', books);
    })
    .catch(err => { throw err })
  res.render('books');
});

module.exports = router;
