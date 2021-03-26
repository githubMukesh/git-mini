import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import User from './user.component';

configure({adapter: new Adapter()});

describe('<User/>', () => {
   it('should render user with correct image and repo link', () => {
    const props = {name: 'Test', html_url: 'http://www.repo.com', stargazers_count: 1, forks_count: 1, owner: {html_url: 'http://www.something.com', avatar_url: 'http://www.something.com'},};
     const wrapper = shallow(<User user= {props}/>);
     wrapper.setProps(props);

     expect(wrapper).toBeDefined();
     expect(wrapper.find('img')).toBeDefined();
     expect(wrapper.find('img').prop('src')).toEqual('http://www.something.com');

     expect(wrapper.find('button')).toBeDefined();
     expect(wrapper.find('a')).toBeDefined();
     expect(wrapper.find('a').prop('href')).toEqual('http://www.repo.com');

   }); 
});
