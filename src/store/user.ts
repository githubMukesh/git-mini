import { FETCH_USERLIST, FETCH_USERLIST_SUCCESS, FETCH_USERLIST_FAIL } from './actionTypes';

export const fetchUsers = () => {
  return {
      type: FETCH_USERLIST
    }
};

export const fetchUsersSuccess = (users: Array<any>) => {
    return {
        type: FETCH_USERLIST_SUCCESS,
        users
    }
}

export const fetchUsersFail = (error: string) => {
    return {
        type: FETCH_USERLIST_FAIL,
        error
    }
}

export const getUsers = () => {
    return dispatch => {
     
    }
};

