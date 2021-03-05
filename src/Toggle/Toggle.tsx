// Generated with utilities/create-component.js
import React from 'react';
import Icon from '../Icon/Icon';
import { IconName, ValidColors } from '../Icon/Icon.types';

import { ToggleProps } from './Toggle.types';

import './Toggle.scss';

const Toggle: React.FC<ToggleProps> = ({ checked, disabled, id, label, name, onChange, value }) => {
  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const inputEl: HTMLInputElement = document.querySelector(`input[type="checkbox"]#${id}`);

    if (e.code === 'Space' || e.code === 'Enter') {
      inputEl.click();
    } else {
      return;
    }
  };

  const handleLabelClick = () => {
    const inputEl: HTMLInputElement = document.querySelector(`input[type="checkbox"]#${id}`);
    const labelEl: HTMLLabelElement = document.querySelector(`label[for="${id}"]`);

    !disabled && labelEl.focus();
    inputEl.click();
  };

  return (
    <div className="toggle__container">
      <input
        data-testid="native-input"
        className="toggle__checkbox"
        type="checkbox"
        id={id}
        name={name}
        value={value}
        disabled={disabled}
        defaultChecked={checked}
        onChange={onChange}
      />
      <label
        data-testid="toggle"
        htmlFor={id}
        className={`toggle${disabled ? ' toggle__disabled' : ''}`}
        tabIndex={0}
        onKeyDown={(e) => handleOnKeyDown(e)}
      >
        <span className="toggle__knob">
          <div className="toggle__knob__icon-container">
            <Icon name={IconName.checkmark} size={12} color={ValidColors.indigo5} />
          </div>
        </span>
      </label>
      <span
        data-testid="label"
        className={`toggle__label${disabled ? ' toggle__label__disabled' : ''}`}
        onClick={handleLabelClick}
      >
        {label}
      </span>
    </div>
  );
};

export default Toggle;
