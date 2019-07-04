const express = require('express');

const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const auth = require('../../middleware/auth'); //used for Protected Routes
const User = require('../../models/User'); // User Model

//@route    GET api/auth
//@desc     Test route
//@access   Public - no token needed
router.get('/', auth, async (req, res) => {
  try {
    //Get user model , requests userdata by user(ID) but we exclude the password
    const user = await User.findById(req.user.id).select('-password');

    res.json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

//@route    Post api/auth
//@desc     Login user & get Token
//@access   Public
router.post(
  '/',
  [
    check('email', 'Email is required')
      .not()
      .isEmpty(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    //using async will allow us to use await instead .then
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      //Checks if user exists already
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Login Details' }] });
      }

      //Check if enter password is correct
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Incorrect Login Details' }] });
      }
      //Returns json Web Token
      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecretToken'),
        { expiresIn: 360000 }, //change expires in back to 3600 during production!!

        // Send user to Dashboard?

        (err, token) => {
          if (err) throw err; // if error
          res.json({ token }); //if successful, it will return token
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
