import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import UserList from './userList.component';
import reducer, { IAppState } from '../store/reducer';
import thunk from "redux-thunk"
import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import Loader from './loader.component';
import User from './user.component';

configure({adapter: new Adapter()});

describe('<UserList/>', () => {
    let store: Store<IAppState>;
    let wrapper;
    
    beforeEach(() => {
         store  = createStore(reducer,  composeWithDevTools(applyMiddleware(thunk)))
         wrapper = shallow(<Provider store = {store}><UserList/></Provider>);
    });
    
   it('should render two comonents', () => {
     expect(wrapper).toBeDefined();
   });

});
