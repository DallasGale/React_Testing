import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CheckboxWithLabel from '../components/checkboxWithLabel.component';

test('CheckboxWithLabel changes the text after click', () => {
  const checkbox = shallow(<CheckboxWithLabel labelOn="ON" labelOff="OFF" />);
  
  expect(checkbox.text()).toEqual('OFF');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('ON');
});