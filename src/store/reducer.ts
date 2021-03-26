import {actionTypes} from './actions/actionTypes';

export interface IAppState {
   users: Array<any>;
   error: string;
   searchText: string;
   loading: boolean;
}

const initialState: IAppState  = {
    users: [],
    error: '',
    searchText: '',
    loading: false
    
}

const reducer = (state: IAppState = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_USERLIST:
          return {
            ...state,
            loading: true
          }
        case actionTypes.FETCH_USERLIST_SUCCESS:
          return {
            ...state,
            users: action.payload,
            loading: false
          }
        case actionTypes.FETCH_USERLIST_FAIL:
            return {
                ...state,
                error: action.error,
                users: [],
                loading: false
              }
        case actionTypes.SET_SEARCH_TEXT:
            return {
                    ...state,
                    searchText: action.payload
                  }
        case actionTypes.CLEAR_SEARCH_TEXT:
            return {
                    ...state,
                    searchText: '',
                    users: []
                    }    
        default:
          return state;                          
      }
};

export default reducer;