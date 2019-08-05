const router = require('express').Router();
var User = require('../models/user.model');

router.route('/').get(function (req, res) {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

router.route('/').post(function (req, res) {
   const username = req.body.username;
   console.log(username);
   const newUser = new User({username: username});
   newUser.save()
       .then(() => res.json('User Added'))
       .catch(err => res.json({'Error': err}));
});

module.exports = router;