const express = require('express');
const { register, login } = require('../models/users');

const router = express.Router();

/* Register a user */
router.post('/register', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const name = req?.body?.name?.length !== 0 ? req.body.name : undefined;
  const firstname = req?.body?.firstname?.length !== 0 ? req.body.firstname : undefined;
  const mail = req?.body?.mail?.length !== 0 ? req.body.mail : undefined;
  const yearBithday = req?.body?.yearBithday > 2001;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !name || !firstname || !mail || !yearBithday || !password) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = await register(username, name,firstname,mail,yearBithday,password);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  return res.json(authenticatedUser);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Reques

  const authenticatedUser = await login(username, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

module.exports = router;
