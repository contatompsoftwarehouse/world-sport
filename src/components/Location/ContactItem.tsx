import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './ContactItem.module.scss';

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  value: string;
  detail?: string;
  href: string;
  external?: boolean;
}

export function ContactItem({ icon, label, value, detail, href, external = false }: ContactItemProps) {
  return (
    <a
      className={styles.item}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className={styles.icon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
        {detail && <span className={styles.detail}>{detail}</span>}
      </span>
      <ArrowUpRight className={styles.arrow} aria-hidden="true" />
      {external && <span className="sr-only"> (abre em uma nova aba)</span>}
    </a>
  );
}