const db = require('../data/database');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');


function getSignup(req, res) {
  res.render('customer/auth/signup');
}

async function signup(req, res) {
  const user = new User(
    req.body.email,
    req.body.password,
    req.body.fullname,
    req.body.street,
    req.body.postal,
    req.body.city
  );

  await user.signup();

  res.redirect('/login');
}

function getLogin(req, res) {
  res.render('customer/auth/login');
}

async function login(req, res, next) {

  const user = new User(req.body.email, req.body.password);
  let existingUser;
  try {
    existingUser = await user.getUserWithSameEmail();
  } catch (error) {
    next(error);
    return;
  }

  if (!existingUser) {
    console.log('please double-check your email!')
    res.redirect('/login');
    return;
  }

  const passwordisCorrect = await user.hasMatchingPassword(existingUser.password)

  if (!passwordisCorrect) {
    console.log('please double-check your password!')
    res.redirect('/login');
    return;
  }

  res.redirect('/login');
  console.log('you are logged!')
  console.log(existingUser.email) 





}

module.exports = {
  getSignup: getSignup,
  getLogin: getLogin,
  signup: signup,
  login: login
};