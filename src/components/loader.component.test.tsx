import React from 'react';
import Loader from './loader.component';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({adapter: new Adapter()});

describe('<Loader/>', () => {
   it('should return loader div', () => {
    const wrapper = shallow(<Loader/>);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('loader')).toBeDefined();
   });
});