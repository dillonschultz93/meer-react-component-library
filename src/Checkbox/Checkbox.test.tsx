// Generated with utilities/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Checkbox from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

describe('Checkbox', () => {
  let props: CheckboxProps;

  beforeEach(() => {
    let checkedState = false;

    props = {
      checked: checkedState,
      id: 'test',
      label: 'Test',
      name: 'test',
      value: 'test',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => (checkedState = e.target.checked),
    };
  });

  const renderComponent = () => render(<Checkbox {...props} />);

  it('should render with default props', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('checkbox');
    const label = getByTestId('label');

    expect(component).toBe;
    expect(component).toHaveAttribute('id', 'test');
    expect(component).toHaveAttribute('name', 'test');
    expect(component).toHaveAttribute('value', 'test');
    expect(label).toHaveTextContent('Test');
  });
});
