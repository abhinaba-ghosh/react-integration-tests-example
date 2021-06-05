import React from 'react';
import Todo from './Todo';

import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { configure, shallow, mount } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('<Todo> component unit test', () => {
    const mockFn = jest.fn();
    const props = {
        onClick: mockFn,
        completed: false,
        text: 'buy milk',
    };

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Todo {...props} />);
    });

    it('should render 1 <Todo> component', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render <Todo> component has correct class', () => {
        expect(wrapper.find('.TodoElementClass')).toHaveLength(1);
    });

    it('should render <Todo> component props', () => {
        expect(wrapper.props().children).toEqual('buy milk');
    });

    it('should update <Todo> component props', () => {
        wrapper.setProps({ text: 'walk dog' });
        expect(wrapper.props().children).toEqual('walk dog');
    });

    it('should call onClick handler when Todo component is clicked', () => {
        wrapper.simulate('click');
        expect(mockFn).toHaveBeenCalledTimes(1);
    });
});

describe('<Todo /> styling behavior', () => {
    const mockFn = jest.fn();

    it('should not have line through style when todo is incomplete', () => {
        const wrapper = shallow(
            <Todo onClick={mockFn} completed={false} text="go shopping" />
        );
        expect(wrapper.props().style).toEqual({ textDecoration: 'none' });
    });

    it('should have line through style when todo is completed', () => {
        const wrapper = shallow(
            <Todo onClick={mockFn} completed={true} text="go shopping" />
        );
        expect(wrapper.props().style).toEqual({
            textDecoration: 'line-through',
        });
    });
});
