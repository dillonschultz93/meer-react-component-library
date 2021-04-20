// Generated with utilities/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Select from './Select';
import { SelectProps } from './Select.types';

describe('Select', () => {
  let props: SelectProps;

  beforeEach(() => {
    let inputValue = [];

    props = {
      label: 'Test',
      placeholder: 'Select an option...',
      options: [
        { itemLabel: 'Pizza', value: 'pizza' },
        { itemLabel: 'Hot Dog', value: 'hot dog' },
      ],
      value: inputValue,
      onChange: (e) => (inputValue = e),
    };
  });

  const renderComponent = () => render(<Select {...props} />);

  it('should exist', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('select');

    expect(component).toBe;
  });
});
