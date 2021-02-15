// Generated with utilities/create-component.js
import React from 'react';

import { CheckboxProps } from './Checkbox.types';

import './Checkbox.scss';

const Checkbox: React.FC<CheckboxProps> = ({ checked, disabled, id, label, name, onChange, required, value }) => (
  <label data-testid="label" className={`checkbox ${disabled && 'disabled-label'}`}>
    <input
      data-testid="checkbox"
      type="checkbox"
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

export default Checkbox;
