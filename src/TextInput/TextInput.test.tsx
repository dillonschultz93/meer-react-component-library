// Generated with utilities/create-component.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TextInput from './TextInput';
import { TextInputProps } from './TextInput.types';

describe('TextInput Component', () => {
  let props: TextInputProps;

  beforeEach(() => {
    let inputValue = '';

    props = {
      id: 'test',
      name: 'test',
      type: 'text',
      placeholder: 'test',
      value: inputValue,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => (inputValue = e.target.value),
    };
  });

  const renderComponent = () => render(<TextInput {...props} />);

  it('should render with default props', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('TextInput');
    const nativeInput = getByTestId('input');

    expect(component).toBe;
    expect(nativeInput).toHaveAttribute('id', 'test');
    expect(nativeInput).toHaveAttribute('name', 'test');
    expect(nativeInput).toHaveAttribute('type', 'text');
    expect(nativeInput).toHaveAttribute('placeholder', 'test');
  });

  it('should render with a label', () => {
    props.label = 'Label';

    const { getByTestId } = renderComponent();

    const nativeLabel = getByTestId('label');

    expect(nativeLabel).toHaveAttribute('for', 'test');
    expect(nativeLabel).toHaveTextContent('Label');
  });

  it('should render with an embedded icon', () => {
    props.icon = { name: 'person' };

    const { getByTestId } = renderComponent();

    const nativeInput = getByTestId('input');
    const icon = getByTestId('icon-embedded');

    expect(nativeInput).toHaveClass('embedded-icon');
    expect(icon.firstElementChild.children[0]).toHaveTextContent('person icon');
  });

  it('should render with an interactive icon', () => {
    const handleClick = jest.fn();
    props.icon = { name: 'close', interactive: true, interactiveMethod: handleClick };

    const { getByTestId } = renderComponent();

    const nativeInput = getByTestId('input');
    const icon = getByTestId('icon-interactive');
    const clickableEl = icon.firstElementChild.firstElementChild;

    fireEvent.click(clickableEl);

    expect(nativeInput).toHaveClass('interactive-icon');
    expect(icon.firstElementChild.children[0]).toHaveTextContent('close icon');
    expect(handleClick).toHaveBeenCalled();
  });
});
