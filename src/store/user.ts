import { actionTypes } from './actions/actionTypes';

export const fetchUsers = () => {
  return {
      type: actionTypes.FETCH_USERLIST
    }
};

export const fetchUsersSuccess = (users: Array<any>) => {
    return {
        type: actionTypes.FETCH_USERLIST_SUCCESS,
        users
    }
}

export const fetchUsersFail = (error: string) => {
    return {
        type: actionTypes.FETCH_USERLIST_FAIL,
        error
    }
}



