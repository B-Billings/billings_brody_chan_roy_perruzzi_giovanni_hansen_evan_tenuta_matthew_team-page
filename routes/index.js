var express = require('express');
var router = express.Router();

const team = {
  brody: {
    name: 'Brody',
    role: 'Project Manager',
    desc: 'Front-End Development',
    avatar: '/images/brody.png'
  },

  Roy:{
    name: 'Roy',
    role: 'Motion Graphics',
    desc: 'Front-End Development'
  },

  Evan:{
    name: 'Evan',
    role: 'Front-End Development',
    desc: 'Front-End Development'
  },

  Matt:{
    name: 'Matt',
    role: 'Graphic Design',
    desc: 'Front-End Development'

  },
  Gio:{
    name: 'Gio ',
    role: 'Back-End',
    desc: 'Front-End Development'
  }
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/team/:member', function(req, res) {
  console.log('req.params.member');
  res.render('team', { person: team [req.params.member]});
})

module.exports = router;
