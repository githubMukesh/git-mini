import reducer from './reducer';
import { actionTypes } from './actions/actionTypes';
import { setSearchText, clearSearchText, fetchUserListSuccess, fetchUserListFail, fetchUserList } from './actions/userAction';


describe('App reducer', () => {
  
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        users: [],
        error: '',
        searchText: '',
        loading: false });
    });

   it('should set search text on setSearchText action', () => {
    expect(reducer(undefined, setSearchText('some')).searchText).toEqual('some');
   });

   it('should set clear search text and empty user on clearSearchText action ', () => {
    expect(reducer(undefined, clearSearchText()).searchText).toEqual('');
   });

   it('should set users and dataloading to false on fetchUserListSuccess action ', () => {
    const users = ['user1', 'user2']; 
    const state = reducer(undefined, fetchUserListSuccess(users));  
    expect(state.users).toEqual(users);
    expect(state.loading).toBeFalsy();
   });

   it('should set error and dataloading to false on fetchUserListFail action ', () => {
    const state = reducer(undefined, fetchUserListFail('err'));  
    expect(state.error).toEqual('err');
    expect(state.loading).toBeFalsy();
   });

   it('should set  dataloading to true on fetchUserList action ', () => {
    const state = reducer(undefined, fetchUserList());  
    expect(state.loading).toBeTruthy();
   });
});