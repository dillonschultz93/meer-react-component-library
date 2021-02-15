// Generated with utilities/create-component.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

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

  it('should render as checked', () => {
    props.checked = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId('checkbox');

    expect(component).toHaveAttribute('checked');
  });

  it('should render as required', () => {
    props.required = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId('checkbox');

    expect(component).toHaveAttribute('required');
  });

  it('should render as disabled', () => {
    props.disabled = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId('checkbox');
    const label = getByTestId('label');

    expect(component).toHaveAttribute('disabled');
    expect(label).toHaveClass('disabled-label');
  });
});
