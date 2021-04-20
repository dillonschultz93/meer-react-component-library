// Generated with utilities/create-component.js
import React, { useState, useEffect } from 'react';

import { SelectProps } from './Select.types';
import Icon from '../Icon/Icon';
import { IconName, ValidColors } from '../Icon/Icon.types';

import './Select.scss';

const Select: React.FC<SelectProps> = ({
  label,
  placeholder,
  options,
  multiSelect = false,
  required,
  disabled,
  width,
  onChange,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    onChange([...selection]);
  }, [selection]);

  const handleToggleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    setOpen(!open);
  };

  const handleToggleOnKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    switch (e.code) {
      case 'Space':
        setOpen(!open);
        break;

      case 'Enter':
        setOpen(!open);
        break;

      default:
        return;
    }
  };

  const handleSelectItem = (item: { itemLabel: string; value: string }, e: any) => {
    if (!selection.some((current) => current.value === item.value)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      handleRemoveItem(item, e);
    }
  };

  const handleRemoveItem = (item: { itemLabel: string; value: string }, e: React.BaseSyntheticEvent) => {
    e.stopPropagation();

    let selectionAfterRemoval = selection;
    selectionAfterRemoval = selectionAfterRemoval.filter((current) => current.value !== item.value);
    setSelection([...selectionAfterRemoval]);
  };

  const isItemInSelection = (item: { itemLabel: string; value: string }) => {
    if (selection.find((current) => current.value === item.value)) {
      return true;
    }

    return false;
  };

  return (
    <div className="select-wrapper" style={{ width: `${width ? width : 100}%` }}>
      {label && (
        <label data-testid="label" className={disabled && 'disabled'}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <div
        tabIndex={0}
        className="select"
        role="button"
        onKeyPress={(e) => handleToggleOnKeyPress(e)}
        onClick={(e) => handleToggleOnClick(e)}
        data-testid="select"
      >
        <div className="select__items-container">
          {selection.length > 0 ? (
            selection.map((item) => {
              if (multiSelect) {
                return (
                  <span className="select--item" key={item.value} onClick={(e) => handleRemoveItem(item, e)}>
                    {item.itemLabel}
                    <div className="select__multiselect-container">
                      <Icon name={IconName.close} size={12} color={ValidColors.gray7} />
                    </div>
                  </span>
                );
              } else {
                return <span>{item.itemLabel}</span>;
              }
            })
          ) : (
            <span className="select--placeholder">{placeholder}</span>
          )}
        </div>
        <div className={`select__icon-container ${open ? 'select__icon-container--rotated' : ''}`}>
          <Icon name={IconName.angleDown} size={18} />
        </div>
      </div>
      <ul className={`select-list ${!open ? 'select-list__hidden' : ''}`} role="listbox">
        {options.map((item) => (
          <li
            role="option"
            className={`${isItemInSelection(item) ? 'item-selected' : ''}`}
            key={item.itemLabel}
            tabIndex={open ? 0 : -1}
            onClick={(e) => handleSelectItem(item, e)}
            onKeyPress={(e) => handleSelectItem(item, e)}
          >
            <span>{item.itemLabel}</span>
            {isItemInSelection(item) && <Icon name={IconName.checkmark} size={12} color={ValidColors.indigo5} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
