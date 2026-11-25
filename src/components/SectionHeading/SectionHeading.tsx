import type { ReactNode } from 'react';
import styles from './SectionHeading.module.scss';

interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description: string;
  action?: ReactNode;
  tone?: 'dark' | 'light';
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  tone = 'dark',
}: SectionHeadingProps) {
  return (
    <header className={`${styles.heading} ${tone === 'light' ? styles.light : ''}`}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      <div className={styles.side}>
        <p className={styles.description}>{description}</p>
        {action && <div className={styles.action}>{action}</div>}
      </div>
    </header>
  );
}