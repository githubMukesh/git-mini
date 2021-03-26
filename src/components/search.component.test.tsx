import React from 'react';
import Search from './search.component';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store } from 'redux';
import reducer, { IAppState } from '../store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk"

configure({adapter: new Adapter()});

describe('<Search/>', () => {
    let store: Store<IAppState>;
    let wrapper;
    
    beforeEach(() => {
         store  = createStore(reducer,  composeWithDevTools(applyMiddleware(thunk)))
         wrapper = shallow(<Provider store = {store}><Search/></Provider>);
    });

   it('should create component', () => {
    expect(wrapper).toBeDefined();
   });

   it('should have a input field', () => {
    expect(wrapper.find('input')).toBeDefined();
   });
});