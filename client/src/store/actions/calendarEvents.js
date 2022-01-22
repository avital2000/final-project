import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const getAllCalendarEvents = () => {
    return (dispatch) => {
        axios.get("http://localhost:3001/calendar_events/getAll").then(calendarEventList => {
            console.log("succeeded");
            // כאן הוא משגר לרידוסר את סייב לוגס
            dispatch(saveCalendarEvents(calendarEventList.data));
        }).catch(err => { console.log("failed"); console.log(err.message); });
    }
}

export const addCalendarEvent = (calendarEvents) => {
    axios.post("http://localhost:3001/calendar_events/addEvent",calendarEvents);
    return {
        type: actionTypes.CALENDAR_EVENT_ADDED,
        payload: calendarEvents
    }
}

const saveCalendarEvents = (calendarEvents) => {
    return {
        type: actionTypes.CALENDAR_EVENT_SAVED,
        payload: calendarEvents
    }
}

export const selectCalendarEvent = (calendarEvents) => {
    return {
        type: actionTypes.CALENDAR_EVENT_SELECTED,
        payload: calendarEvents
    }
}

export const deleteCalendar = (calendars) => {
    return {
        type: actionTypes.CALENDAR_DELETED,
        payload: calendars
    }
}
export default addCalendarEvent;