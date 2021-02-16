// Generated with utilities/create-component.js
import React from 'react';

import { RadioProps } from './Radio.types';

import './Radio.scss';

const Radio: React.FC<RadioProps> = ({ checked, disabled, id, label, name, onChange, required, value }) => (
  <label data-testid="radio-label" className={`radio ${disabled && 'disabled-label'}`}>
    <input
      data-testid="radio"
      type="radio"
      id={id}
      name={name}
      required={required}
      disabled={disabled}
      checked={checked}
      value={value}
      onChange={onChange}
    />
    {label} {required && <span>*</span>}
  </label>
);

export default Radio;
