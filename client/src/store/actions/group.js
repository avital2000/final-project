import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const getAllGroups = () => {
    return (dispatch) => {
        axios.get("http://localhost:3001/group/getAll").then(groupList => {
                console.log("succeeded");
                // כאן הוא משגר לרידוסר את סייב לוגס
                dispatch(saveGroups(groupList.data));
            }).catch(err => console.log("failed"));
    }
}

export const getGroupsById = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3001/group/getGroupsById/${id}`).then(groupList => {
                console.log("succeeded");
                console.log(groupList.data)
                dispatch(saveGroups(groupList.data));
            }).catch(err => console.log("failed"));
    }
}

export const addGroup = (group) => {
    return {
        type: actionTypes.GROUP_ADDED,
        payload: group
    }
}

const saveGroups = (groups) => {
    return {
        type: actionTypes.GROUP_SAVED,
        payload: groups
    }
}

export const selectGroup = (groups) => {
    return {
        type: actionTypes.GROUP_SELECTED,
        payload: groups
    }
}

export const deleteGroup = (groups) => {
    return {
        type: actionTypes.GROUP_DELETED,
        payload: groups
    }
}
export default addGroup;