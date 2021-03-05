// Generated with utilities/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Toggle from './Toggle';
import { ToggleProps } from './Toggle.types';

describe('Toggle', () => {
  let props: ToggleProps;

  beforeEach(() => {
    props = {
      checked: false,
      id: 'test',
      label: 'Test',
      name: 'test',
      value: 'test',
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => (props.checked = e.target.checked),
    };
  });

  const renderComponent = () => render(<Toggle {...props} />);

  it('should render with default props', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('toggle');
    const nativeInput = getByTestId('native-input');
    const label = getByTestId('label');

    expect(component).toBe;
    expect(nativeInput).toHaveAttribute('id', 'test');
    expect(nativeInput).toHaveAttribute('name', 'test');
    expect(nativeInput).toHaveAttribute('value', 'test');
    expect(label).toHaveTextContent('Test');
    expect(component).toHaveAttribute('for', 'test');
  });

  it('should render as checked', () => {
    props.checked = true;
    const { getByTestId } = renderComponent();

    const nativeInput = getByTestId('native-input');

    expect(nativeInput).toHaveAttribute('checked');
  });

  it('should render as disabled', () => {
    props.disabled = true;
    const { getByTestId } = renderComponent();

    const component = getByTestId('native-input');
    const label = getByTestId('label');

    expect(component).toHaveAttribute('disabled');
    expect(label).toHaveClass('toggle__label__disabled');
  });
});
