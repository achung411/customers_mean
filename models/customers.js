var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({
  name:  String,
  date: { type: Date, default: Date.now },
  hidden: Boolean,
});
CustomerSchema.path('name').required(true, 'User name cannot be blank');
mongoose.model('Customer', CustomerSchema);