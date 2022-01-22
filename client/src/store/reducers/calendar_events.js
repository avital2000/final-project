import * as actionTypes from '../actionTypes';

const initialState = {
    calendarEventsArr: [],
    selectedCalendarEvent: null
}

export const calendar_events = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CALENDAR_EVENT_ADDED:
            return {
                ...state,
                calendarEventsArr: [...state.calendarEventsArr, action.payload]
            }
        case actionTypes.CALENDAR_EVENT_DELETED:
            let arr = state.calendarEventsArr.filter(p => p.id !== action.payload);
            return {
                ...state,
                calendarEventsArr: arr
            }
        case actionTypes.CALENDAR_EVENT_SAVED:
            return {
                ...state,
                calendarEventsArr: [...action.payload]
            }
        default:
            break;
    }
    return state;
}