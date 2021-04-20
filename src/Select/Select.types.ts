// Generated with utilities/create-component.js
export interface SelectProps {
  label?: string;
  placeholder: string;
  options: { itemLabel: string; value: string }[];
  multiSelect?: boolean;
  required?: boolean;
  disabled?: boolean;
  width?: 25 | 33.33 | 50 | 66.33 | 75 | 100;
  value: { itemLabel: string; value: string }[] | [];
  onChange: (value: { itemLabel: string; value: string }[] | []) => void;
}
