let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let user = new Schema({
    username: String,
    password: String
})

user.methods.validPassword = function(pwd){
  return (this.password === pwd)
}

module.exports = mongoose.model('User', user)
