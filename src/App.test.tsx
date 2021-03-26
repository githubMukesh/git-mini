import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Search from './components/search.component';
import UserList from './components/userList.component';

configure({adapter: new Adapter()});

describe('<App/>', () => {
   it('should render two comonents', () => {
     const wrapper = shallow(<App/>)
     expect(wrapper).toBeDefined();
     expect(wrapper.find(Search)).toHaveLength(1);
     expect(wrapper.find(UserList)).toHaveLength(1);
   });
});
