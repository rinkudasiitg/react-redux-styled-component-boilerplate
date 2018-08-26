import React from 'react';
import { shallow } from 'enzyme';
import {{name}} from './{{name}}';

test('should render the Button correctly', () => {
    const wrapper = shallow(<{{name}} />);
    expect(wrapper).toMatchSnapshot();
});