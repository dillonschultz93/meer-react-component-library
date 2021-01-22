// Generated with util/create-component.js
import React from 'react';

import { ButtonProps } from './Button.types';

import './Button.scss';

//TODO Add a loading property
//TODO Add an icon property
const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'medium',
  shape,
  role = 'button',
  block,
  href,
  target,
  onClick,
  children,
}) => {
  const defaultStyles = ['button'];
  defaultStyles.push(`button--${type}`, `button--${size}`);
  block && defaultStyles.push('block');
  shape && defaultStyles.push(`button--${size}--${shape}`);

  switch (role) {
    case 'link':
      return (
        <a
          data-testid="button"
          href={href}
          target={target}
          className={defaultStyles.join(' ').trim()}
          rel="noreferrer noopener"
        >
          {children}
        </a>
      );

    case 'submit':
      return (
        <button
          data-testid="button"
          role="button"
          type="submit"
          onClick={onClick}
          className={defaultStyles.join(' ').trim()}
        >
          {children}
        </button>
      );

    default:
      return (
        <button
          data-testid="button"
          role="button"
          type="submit"
          onClick={onClick}
          className={defaultStyles.join(' ').trim()}
        >
          {children}
        </button>
      );
  }
};

export default Button;
