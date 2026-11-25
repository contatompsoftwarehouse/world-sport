import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & {
  href: string;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  icon?: ReactNode;
  external?: boolean;
  compact?: boolean;
};

export function Button({
  variant = 'primary',
  icon,
  external = false,
  compact = false,
  children,
  ...rest
}: ButtonProps) {
  const className = [styles.button, styles[variant], compact && styles.compact]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      className={className}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {icon}
      <span>{children}</span>
      {external && <span className="sr-only"> (abre em uma nova aba)</span>}
    </a>
  );
}