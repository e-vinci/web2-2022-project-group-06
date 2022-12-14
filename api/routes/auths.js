const express = require('express');
const {login,register} =require('../models/users')

const router = express.Router();

/* GET users listing. */
router.post('/login', async (req, res) => {
    const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
    const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;
 if(!username || !password) return res.sendStatus(400)
  
 const authenticatedUser = await login(username,password);

 if(!authenticatedUser) return res.sendStatus(401);

 // eslint-disable-next-line no-console
 console.log(authenticatedUser);
 
 createCookieSessionData(req, authenticatedUser);

  return res.json(authenticatedUser);
});

router.post('/register', async (req, res) => {
    const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
    const lastname = req?.body?.name?.length !== 0 ? req.body.lastname : undefined;
    const firstname = req?.body?.firstname?.length !== 0 ? req.body.firstname : undefined;
    const mail = req?.body?.mail?.length !== 0 ? req.body.mail : undefined;
    const yearBithday = req?.body?.yearBithday?.length !== 0 ? req.body.yearBithday : undefined;
    const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;
    
 if(!username || !lastname|| !firstname|| !mail|| !yearBithday|| !password) return res.sendStatus(400)

 const authenticatedUser = await register(username,lastname,firstname,mail,yearBithday,password);

 if(!authenticatedUser) return  res.sendStatus(401);

 createCookieSessionData(req, authenticatedUser);

  return res.json(authenticatedUser);
});


function createCookieSessionData(req, authenticatedUser) {
    req.session.username = authenticatedUser.username;
    req.session.token = authenticatedUser.token;
}

module.exports = router;