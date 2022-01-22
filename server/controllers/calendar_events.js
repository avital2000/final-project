const Calendar_events = require('../models/calendar_events');

//TODO
const getAll = async (req, res) => {
    try {
        const events = await Calendar_events.find();
        // events.map(p => { })
        res.status(200).json(events);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const addEvent = async (req, res) => {
    let event = req.body;

    //TODO
    //צריך להוסיף את שדה כל היום לסכמה
    //לטופס צריך להוסיף תמונה וסוג אירוע
    let newEvent = new Calendar_events(
        {
            event_type: "normal",
            start_date: event.startDate,
            end_date: event.endDate,
            image: 'acv',
            short_description: event.title,
            long_description: event.notes
        }
    );
    await newEvent.save();
}

module.exports = { getAll, addEvent };