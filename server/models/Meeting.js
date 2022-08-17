const mongoose = require('mongoose')
var Schema = mongoose.Schema

const MeetingSchema = new mongoose.Schema({
  dateTime: {
    type: Date,
    default: Date.now,
    required: [true, 'Please add First Name'],
  },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

module.exports = mongoose.model('Meeting', MeetingSchema)
