const mongoose = require("mongoose");
const Calendar_events = require("../models/calendar_events");

const calendarSchema = new mongoose.Schema({
  name: String,
  manager_user_id: { type: mongoose.Types.ObjectId, ref: 'user' },
  group_id: {type:mongoose.Types.ObjectId, ref:'user'},
  // events: [CalendarEvents],
}, {
  versionKey: false
});

const Calendar = mongoose.model("calendar", calendarSchema);
module.exports = Calendar;
