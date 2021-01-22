// Generated with util/create-component.js
import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

describe('Test Component', () => {
  let props: ButtonProps;

  // beforeEach(() => {});

  const renderComponent = () => render(<Button {...props}>Button</Button>);

  it('should render foo text correctly', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    expect(component).toHaveTextContent('Button');
  });
});
