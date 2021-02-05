// Generated with utilities/create-component.js
export interface TextInputProps {
  id: string;
  name: string;
  type: 'email' | 'password' | 'tel' | 'text' | 'url';
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  icon?: {
    name: string;
    interactive?: boolean;
    interactiveMethod?: (event: React.MouseEvent) => void;
  };
  required?: boolean;
  validation?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  validationState?: {
    type: 'error' | 'warning' | 'success' | null;
    message: string;
  };
  disabled?: boolean;
  width?: 25 | 33.33 | 50 | 66.33 | 75 | 100;
}
