import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

describe('CounterButton Component', () => {
    let wrapper;

    beforeEach( () => {
        const stubColor = 'red';
        wrapper = shallow(<CounterButton color={stubColor}/>)
    });

    it('should compare to previous snapshot when test run', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should correctly increment counter (find by ID)', () => {
        wrapper.find('[id="counter"]').simulate('click');
        expect(wrapper.state()).toEqual({count: 1});
    });

    it('should correctly increment counter (find by type)', () => {
        wrapper.find('button').simulate('click');
        expect(wrapper.state()).toEqual({count: 1});
    });    
});
