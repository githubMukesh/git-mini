import { fetchUserList, fetchUserListFail, fetchUserListSuccess } from './../actions/userAction';

  
  export const getUserList = (searchText = 'mukesh') => async (dispatch: any) => {
    dispatch(fetchUserList());
    try {
      const res = await fetch(`https://api.github.com/users/${searchText}/repos`);
      const data = await res.json();
      dispatch(fetchUserListSuccess(data));
    } catch (err) {
      dispatch(fetchUserListFail(err.message));
    }
  }