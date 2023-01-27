var express = require('express');
var router = express.Router();

const team = {
  brody: {
    name: 'Brody Billings',
    role: 'Project Manager',
    desc: "Hello my name is Brody, I am the Project Manager for our Final Integrated Project, the campaign on Bullying In Sports.",
    avatar: '/images/brody.jpg'
  },

  Roy:{
    name: 'Roy Chan',
    role: 'Motion Graphics Designer',
    desc: 'Hi my name is Roy, I am the Motion Graphics Designer in the team, I love making all kinds of motion graphics/animated artwork, a big fan of Photoshop, Illustrator, Premiere and After Effects',
    avatar: '/images/Roy.jpg'
  },


  Evan:{
    name: 'Evan',
    role: 'Front-End Development',
    desc: "i'm trapped in a tiny room, there is barely any light and they tell me to make websites. all they give me to eat is oatmeal and sausage. if you're reading this, please send help",
    avatar: '/images/evan.jpg'
  },

  Matt:{
    name: 'Matt',
    role: 'Graphic Design',
    desc: 'Front-End Development',
    avatar: '/images/.jpg'

  },
  Gio:{
    name: 'Gio ',
    role: 'Back-End',
    desc: 'Front-End Development',
    avatar: '/images/.jpg'
  }
}


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Our Team Page' });
});

router.get('/team/:member', function(req, res) {
  console.log('req.params.member');
  res.render('team', { person: team [req.params.member]});
})

module.exports = router;
