import type { ReactNode } from 'react';
import styles from './CtaBanner.module.scss';

interface CtaBannerProps {
  title: string;
  description: string;
  action: ReactNode;
}

export function CtaBanner({ title, description, action }: CtaBannerProps) {
  return (
    <aside className={styles.banner}>
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.action}>{action}</div>
    </aside>
  );
}