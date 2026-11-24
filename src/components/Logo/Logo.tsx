import styles from './Logo.module.scss';

export function Logo() {
  return (
    <a className={styles.logo} href="#inicio" aria-label="World Sport — ir para o início">
      <svg className={styles.mark} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M0 6h10l6 14 6-14h10l-11 24h-10z" fill="currentColor" />
      </svg>
      <span className={styles.word}>
        World<span className={styles.accent}>Sport</span>
      </span>
    </a>
  );
}