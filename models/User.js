//User Model - Schemas attached to user

const mongoose = require('mongoose');

/*Image Attached to User
var ImageSchema = new mongoose.Schema({
  path: {
    type: String
  },
  information: {
    type: String
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  Verification: {
    //True = Pass Moderation tests , False = did not pass or has not passed yet?
    type: Boolean
  },
  ModerationStatus: {
    // True = Checked , False = needs moderation
    type: Boolean
  },
  ModerationNotes: {
    //This may be used for user validation , Why the image failed moderation
    type: String
  }
});*/

//User Schema and external Schemas
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },

  avatar: {
    type: String
  }
  /* RegDate: {
    type: Date,
    default: Date.now
  } */
  // ImageObject: [ImageSchema] */
});

module.exports = User = mongoose.model('user', UserSchema);
