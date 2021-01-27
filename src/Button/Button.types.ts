// Generated with util/create-component.js
export interface ButtonProps {
  type: 'primary' | 'ghost' | 'danger' | 'default';
  size: 'large' | 'medium' | 'small';
  role: 'button' | 'submit' | 'link';
  disabled?: boolean;
  shape?: 'circle' | 'round';
  block?: boolean;
  href?: string;
  icon?: {
    name: string;
    color: string;
    size: 18 | 24 | 32 | 40 | 48 | 56 | 64 | 72;
  };
  target?: '_self' | '_blank' | '_parent' | '_top';
  onClick?: (event: React.MouseEvent) => void;
}
