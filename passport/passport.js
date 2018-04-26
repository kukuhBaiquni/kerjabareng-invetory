var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user')

module.exports = function(passport){

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
      done(err, user);
    })
  });

passport.use('login', new LocalStrategy({
  usernameField : 'username',
  passwordField : 'password',
  passReqToCallback : true
},
function(req, username, password, done){
  User.findOne({'username' : username}, function(err, user){
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, req.flash('loginMessage', 'user tidak ditemukan'))
    }
    if (!user.validPassword(password)) {
      return done(null, false, req.flash('loginMessage', 'password salah'))
    }
    return done(null, user);
  })
}

))

}
