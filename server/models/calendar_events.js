const mongoose = require("mongoose");

const calendar_eventsSchema = new mongoose.Schema({
  // event_type: { type: mongoose.Types.ObjectId, ref: "events_type" },
  event_type: String,
  start_date: Date,
  end_date: Date,
  image: String,
  short_description: String,
  long_description: String,
}, {
  versionKey: false
});

const Calendar_events = mongoose.model("calendar_events", calendar_eventsSchema);
module.exports = Calendar_events;
