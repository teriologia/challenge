const express = require('express');
const router = express.Router();

const loginController = require('../controller/loginController')

/* GET login listing. */
router.get('/', (req, res, next) => {
  res.render('login', { title: 'LOGIN'});
});

//POST Login listing
router.post('/', loginController, (req, res, next) => {

  //if statemant to control local variable from login controller
  if(res.locals.islogin)
  {
    req.session.islogin = true;
    res.redirect('/album');   
  }
  else{
    res.render('login', { title: 'LOGIN', status: 401, error: 'Wrong Login or Password'})
  }
});

module.exports = router;
