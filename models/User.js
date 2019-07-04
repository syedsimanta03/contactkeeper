const mongoose = require('mongoose'); 

// Declare the Schema of the Mongo model
const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        /* unique:true,
        index:true, */
    },
    email:{
        type:String,
        required:true,
        unique:true,
        //index:true,
    },
    password:{
      type:String,
      required:true,
      //index:true,
    },
    date:{
        type:Date,
        default:Date.now,
        /* unique:true,
        index:true, */
    }
});

//Export the model
module.exports = mongoose.model('user', UserSchema);