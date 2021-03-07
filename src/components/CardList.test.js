import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('should render snapshot of CardList component', () => {
    const mockRobots = [{
        id: 1,
        name: 'John Snow',
        username: 'JohnJohn',
        email: 'john@email.com'
    }];
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
});