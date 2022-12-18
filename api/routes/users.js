const express = require('express');
const {leaderboard, getChips} =require('../models/users')

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ users: [{ name: 'Brandon & co' }] });
});

router.get('/leaderboard', (req, res) => {
  const users = leaderboard();
  res.json({ users });
});



router.get('/chips', (req, res) => {
  const {username} = req.query;
  const chips = getChips(username);
  res.json({ chips });
});


module.exports = router;
