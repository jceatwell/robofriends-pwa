import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('should render test against last snapshot taken', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
});