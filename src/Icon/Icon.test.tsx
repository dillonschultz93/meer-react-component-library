// Generated with utilities/create-component.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Icon from './Icon';
import { IconProps, IconName } from './Icon.types';

describe('Icon Component', () => {
  let props: IconProps;

  beforeEach(() => {
    props = {
      name: IconName.person,
      size: 18,
    };
  });

  const renderComponent = () => render(<Icon {...props} />);

  it('should render with default props', () => {
    const { getByTestId } = renderComponent();

    const component = getByTestId('icon');
    const iconTitle = getByTestId('icon-title');

    expect(component).toBe;
    expect(component).toHaveAttribute('width', '18px');
    expect(component).toHaveAttribute('height', '18px');
    expect(component).toHaveAttribute('fill', '#393f47');
    expect(iconTitle).toHaveTextContent('person icon');
  });

  it('should have a width and height of 32px', () => {
    props.size = 32;
    const { getByTestId } = renderComponent();

    const component = getByTestId('icon');

    expect(component).toHaveAttribute('width', '32px');
    expect(component).toHaveAttribute('height', '32px');
  });

  it('should have a name of cloud', () => {
    props.name = IconName.cloud;
    const { getByTestId } = renderComponent();

    const iconTitle = getByTestId('icon-title');

    expect(iconTitle).toHaveTextContent('cloud icon');
  });

  it('should inject an animated svg', () => {
    props.animate = true;
    const { getByTestId } = renderComponent();

    const animationPath = getByTestId('animation-path');
    const animationTransfrom = getByTestId('animation-transform');

    expect(animationPath).toBe;
    expect(animationTransfrom).toHaveAttribute('repeatCount', 'indefinite');
  });

  it('should set a repeat-count to 4', () => {
    props.animate = { delay: 4 };
    const { getByTestId } = renderComponent();

    const animationTransfrom = getByTestId('animation-transform');

    expect(animationTransfrom).toHaveAttribute('repeatCount', '4');
  });

  it('should trigger an onClick event', () => {
    const handleClick = jest.fn();
    props.onClick = handleClick;

    const { getByTestId } = renderComponent();
    const component = getByTestId('icon');

    fireEvent.click(component);

    expect(handleClick).toHaveBeenCalled();
  });
});
