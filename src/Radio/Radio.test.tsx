// Generated with utilities/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Radio from './Radio';
import { RadioProps } from './Radio.types';

describe('Radio', () => {
  let props: RadioProps;

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

  const renderComponent = () => render(<Radio {...props} />);

  it('should render with default props', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('radio');
    const label = getByTestId('radio-label');

    expect(component).toBe;
    expect(component).toHaveAttribute('id', 'test');
    expect(component).toHaveAttribute('name', 'test');
    expect(component).toHaveAttribute('value', 'test');
    expect(label).toHaveTextContent('Test');
  });

  it('should render as checked', () => {
    props.checked = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId('radio');

    expect(component).toHaveAttribute('checked');
  });

  it('should render as required', () => {
    props.required = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId('radio');

    expect(component).toHaveAttribute('required');
  });

  it('should render as disabled', () => {
    props.disabled = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId('radio');
    const label = getByTestId('radio-label');

    expect(component).toHaveAttribute('disabled');
    expect(label).toHaveClass('disabled-label');
  });
});
