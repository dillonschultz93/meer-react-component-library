// Generated with util/create-component.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

describe('Button Component', () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      type: 'default',
      size: 'medium',
      role: 'button',
    };
  });

  const renderComponent = () => render(<Button {...props}>Button</Button>);

  it('should render with default props', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    expect(component).toHaveClass('button button--default button--medium');
    expect(component).toHaveAttribute('role', 'button');
    expect(component).toHaveAttribute('type', 'button');
  });

  it('should render as a large style', () => {
    props.size = 'large';

    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    expect(component).toHaveClass('button button--default button--large');
  });

  it('should render as a small style', () => {
    props.size = 'small';

    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    expect(component).toHaveClass('button button--default button--small');
  });

  it('should render as a primary style', () => {
    props.type = 'primary';

    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    expect(component).toHaveClass('button--primary');
  });

  it('should render as a ghost style', () => {
    props.type = 'ghost';

    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    expect(component).toHaveClass('button--ghost');
  });

  it('should render as a danger style', () => {
    props.type = 'danger';

    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    expect(component).toHaveClass('button--danger');
  });

  it('should render as a full width button', () => {
    props.block = true;

    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    expect(component).toHaveClass('block');
  });

  it('should render as a rounded button', () => {
    props.shape = 'round';

    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    expect(component).toHaveClass('button--medium--round');
  });

  it('should render as a circle button', () => {
    props.shape = 'circle';

    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    expect(component).toHaveClass('button--medium--circle');
  });

  it('should render as disabled', () => {
    props.disabled = true;

    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    expect(component).toHaveAttribute('disabled');
    expect(component).toBeDisabled();
  });

  it('should render as an anchor', () => {
    props.role = 'link';
    props.href = 'https://dillonschultz.design';

    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    expect(component).toHaveAttribute('href', 'https://dillonschultz.design');
    expect(component).toHaveAttribute('target', '_blank');
    expect(component).toHaveAttribute('rel', 'noreferrer noopener');
  });

  it('should trigger the onClick event', () => {
    const handleClick = jest.fn();
    props.onClick = handleClick;

    const { getByTestId } = renderComponent();

    const component = getByTestId('button');

    fireEvent.click(component);

    expect(handleClick).toHaveBeenCalled();
  });
});
