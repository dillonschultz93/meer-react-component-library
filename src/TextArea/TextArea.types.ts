// Generated with utilities/create-component.js
export interface TextAreaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  autocapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  label?: string;
  required?: boolean;
  rows?: number;
  resize?: 'none' | 'vertical';
  spellcheck?: boolean;
  disabled?: boolean;
  showCount?: boolean;
  maxLength?: number;
  width?: 25 | 33.33 | 50 | 66.33 | 75 | 100;
}

export interface ProgressCircleProps {
  charCount: number;
  percentage: number;
}
