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


export const GetUsers = () => {
    console.log("GetUsers");

    return (dispatch: any) => {
        console.log("GetUsers dispatch");

        fetch(`https://reqres.in/api/users`)
        .then((resp) => resp.json())
        .then(res => {
            const users = res.data;

            dispatch({
                type: actionTypes.FETCH_USERLIST_SUCCESS,
                users
            });
        }).catch((err) => {
            console.log(err);
            dispatch({
                type: actionTypes.FETCH_USERLIST_FAIL,
                users: [],
                error: err
            });
        })
    };
};


