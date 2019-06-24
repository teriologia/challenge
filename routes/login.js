const express = require('express');
const router = express.Router();

const loginController = require('../controller/loginController')

/* GET login listing. */
router.get('/', (req, res, next) => {
  res.render('login', { title: 'LOGIN'});
});

//POST Login listing
router.post('/', loginController, (req, res, next) => {
  if(res.locals.islogin)
  {
    res.redirect('/album?');
  }
  else{
    res.send('Wrong user name or password')
  }

});

module.exports = router;
