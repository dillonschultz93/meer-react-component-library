// Generated with utilities/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import TextArea from './TextArea';
import { TextAreaProps } from './TextArea.types';

describe('TextArea', () => {
  let props: TextAreaProps;

  beforeEach(() => {
    let inputValue = '';

    props = {
      id: 'test',
      name: 'test',
      value: inputValue,
      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => (inputValue = e.target.value),
    };
  });

  const renderComponent = () => render(<TextArea {...props} />);

  it('should render with default props', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('TextArea');
    const nativeEl = getByTestId('text-area');

    expect(component).toBe;
    expect(nativeEl).toHaveAttribute('id', 'test');
    expect(nativeEl).toHaveAttribute('name', 'test');
  });

  it('should render with a label', () => {
    props.label = 'Label';
    const { getByTestId } = renderComponent();

    const nativeLabel = getByTestId('label');

    expect(nativeLabel).toHaveAttribute('for', 'test');
    expect(nativeLabel).toHaveTextContent('Label');
  });

  it('should have a character limit of 100', () => {
    props.showCount = true;
    props.maxLength = 100;

    const { getByTestId } = renderComponent();

    const nativeEl = getByTestId('text-area');

    expect(nativeEl).toHaveAttribute('maxlength', '100');
  });
});
