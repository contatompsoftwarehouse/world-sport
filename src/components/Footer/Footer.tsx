import { ArrowUp, MessageCircle } from 'lucide-react';
import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';
import { footerContent, locationContent, navItems, whatsappUrl } from '../../config/site';
import styles from './Footer.module.scss';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.description}>{footerContent.description}</p>
            <Button href={whatsappUrl} external icon={<MessageCircle aria-hidden="true" />}>
              {footerContent.cta}
            </Button>
          </div>

          <nav className={styles.column} aria-label="Rodapé">
            <h2 className={styles.title}>{footerContent.navTitle}</h2>
            <ul className={styles.list}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className={styles.link} href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.column}>
            <h2 className={styles.title}>{footerContent.contactTitle}</h2>
            <ul className={styles.list}>
              {locationContent.contacts.map((contact) => (
                <li key={contact.id}>
                  <a
                    className={styles.link}
                    href={contact.href}
                    {...(contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {contact.value}
                    {contact.id === 'address' && (
                      <span className={styles.detail}>{contact.detail}</span>
                    )}
                    {contact.external && <span className="sr-only"> (abre em uma nova aba)</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.wordmark} aria-hidden="true">
          World Sport
        </p>

        <div className={styles.bottom}>
          <p>
            © {year} {footerContent.rights}
          </p>
          <a className={styles.top} href="#inicio">
            {footerContent.backToTop}
            <ArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}