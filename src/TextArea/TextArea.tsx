// Generated with utilities/create-component.js
import React from 'react';
import { TextAreaProps } from './TextArea.types';
import ProgressCircle from './ProgressCircle';

import './TextArea.scss';

const TextArea: React.FC<TextAreaProps> = ({
  id,
  name,
  autocapitalize = 'sentences',
  label,
  rows = 4,
  resize = 'vertical',
  spellcheck,
  disabled,
  showCount,
  maxLength,
  required,
  value,
  width,
  onChange,
}) => {
  const charactersRemainingHandler = () => {
    return maxLength - value.length;
  };

  const percentageHandler = () => {
    const percentLeft = value.length / maxLength;

    return parseFloat(percentLeft.toFixed(2)) * 100;
  };

  return (
    <>
      <div data-testid="TextArea" className="text-area" style={{ width: `${width ? width : 100}%` }}>
        {label && (
          <label htmlFor={id} data-testid="label" className={disabled && 'disabled'}>
            {label} {required && <span>*</span>}
          </label>
        )}
        <textarea
          data-testid="text-area"
          id={id}
          name={name}
          autoCapitalize={autocapitalize}
          required={required}
          rows={rows}
          spellCheck={spellcheck ? spellcheck : false}
          maxLength={showCount && maxLength}
          value={value}
          onChange={onChange}
          disabled={disabled}
          style={{ resize: resize }}
        />
        {showCount && maxLength && !disabled && (
          <div className="progress-container">
            <ProgressCircle charCount={charactersRemainingHandler()} percentage={percentageHandler()} />
          </div>
        )}
      </div>
    </>
  );
};

export default TextArea;
