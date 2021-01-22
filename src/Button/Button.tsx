// Generated with util/create-component.js
import React from 'react';

import { ButtonProps } from './Button.types';

import './Button.scss';

//TODO Add a loading property
const Button: React.FC<ButtonProps> = ({
  type = 'default',
  size = 'default',
  shape = 'round',
  role = 'button',
  block,
  href,
  target,
  icon,
  onClick,
  children,
}) => {
  const defaultStyles = ['button'];
  block ? defaultStyles.push(type, size, 'block') : defaultStyles.push(type, size, shape);

  switch (role) {
    case 'link':
      return (
        <a data-testid="button" href={href} target={target} className={defaultStyles.join(' ').trim()}>
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
          {icon && <span>{icon}</span>}
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
          {icon && <span>{icon}</span>}
          {children}
        </button>
      );
  }
};

export default Button;
