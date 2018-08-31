import React from 'react';
import Link from '../components/link.component';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.eyespynature.net">Eye Spy Nature</Link>,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // trigger callback
  tree.props.onMouseEnter();

  // re-render
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // trigger callback
  tree.props.onMouseLeave();

  // re-render
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});