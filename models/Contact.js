const mongoose = require('mongoose');

// Declare the Schema of the Mongo model
const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
  },
  
  type: {
    type: String,
    default: 'personal'
  },

	date: {
		type: Date,
		default: Date.now
	}
});

//Export the model
module.exports = mongoose.model('contact', ContactSchema);
