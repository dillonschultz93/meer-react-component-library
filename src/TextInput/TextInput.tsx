// Generated with utilities/create-component.js
import React from 'react';

import { TextInputProps } from './TextInput.types';

import './TextInput.scss';

import Icon from '../Icon/Icon';
import { IconName, ValidColors } from '../Icon/Icon.types';

const TextInput: React.FC<TextInputProps> = ({
  id,
  name,
  type = 'text',
  placeholder,
  label,
  value,
  onChange,
  onBlur,
  disabled,
  required,
  validation,
  icon,
  validationState,
  width,
}) => {
  const styles = [];
  (required || validation) && styles.push(`${validationState.type}`);
  icon && !icon.interactive && styles.push('embedded-icon');
  icon && icon.interactive && styles.push('interactive-icon');

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', width: `${width ? width : 100}%` }}>
      <div data-testid="TextInput" className="text-input">
        {label && (
          <label htmlFor={id} data-testid="label" className={disabled && 'disabled'}>
            {label} {required && <span>*</span>}
          </label>
        )}
        <input
          data-testid="input"
          className={styles.join(' ').trim()}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={(required || validation) && onBlur}
          disabled={disabled}
          value={value}
        />
        {icon && !icon.interactive && (
          <span data-testid="icon-embedded" style={{ position: 'absolute', bottom: '0.6rem', left: '0.5rem' }}>
            <Icon name={IconName[icon.name]} size={18} color={disabled ? ValidColors.gray2 : ValidColors.gray7} />
          </span>
        )}
        {icon && icon.interactive && (
          <span
            role="button"
            data-testid="icon-interactive"
            style={{
              position: 'absolute',
              bottom: '0.6rem',
              right: '0.5rem',
              display: value !== '' ? 'block' : 'none',
            }}
          >
            <Icon
              name={IconName[icon.name]}
              size={18}
              color={disabled ? ValidColors.gray2 : ValidColors.gray7}
              onClick={icon.interactiveMethod}
            />
          </span>
        )}
      </div>
      {(required || validation) && (
        <span
          data-testid="validation-message"
          className={`validation-message validation-message--${validationState.type}`}
        >
          {validationState.message}
        </span>
      )}
    </div>
  );
};

export default TextInput;
