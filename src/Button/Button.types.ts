// Generated with util/create-component.js
export interface ButtonProps {
  type: 'primary' | 'ghost' | 'danger' | 'default';
  size: 'large' | 'medium' | 'small';
  role: 'button' | 'submit' | 'link';
  disabled?: boolean;
  shape?: 'circle' | 'round';
  block?: boolean;
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  onClick?: (event: React.MouseEvent) => void;
}
