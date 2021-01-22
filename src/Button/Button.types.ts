// Generated with util/create-component.js
export interface ButtonProps {
  type: 'primary' | 'secondary' | 'ghost' | 'danger' | 'default';
  size: 'large' | 'default' | 'small';
  shape: 'circle' | 'round';
  role: 'button' | 'submit' | 'link';
  block?: boolean;
  href?: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  icon?: React.ReactElement;
  onClick: (event: React.MouseEvent) => void;
}
