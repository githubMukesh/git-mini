import { actionTypes } from './actionTypes';

export const fetchUserList = () => ({
  type: actionTypes.FETCH_USERLIST 
});

export const fetchUserListSuccess = (payload: Array<any>) =>  ({
type :actionTypes.FETCH_USERLIST_SUCCESS,
payload
});

export const fetchUserListFail = (error: string) => ({
type:  actionTypes.FETCH_USERLIST_FAIL,
error 
}); 

export const setSearchText = (searchText: string) => ({
type: actionTypes.SET_SEARCH_TEXT,
payload: searchText 
});

export const clearSearchText = () => ({
    type: actionTypes.CLEAR_SEARCH_TEXT
});

