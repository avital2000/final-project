const { getAll, addEvent } = require("../controllers/calendar_events");


calendarEventRouter = (app) => {
  app.get("/calendar_events/getAll", getAll);
  app.post("/calendar_events/addEvent", addEvent);
};

module.exports = calendarEventRouter;
