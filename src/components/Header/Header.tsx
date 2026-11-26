
import { useEffect, useId, useRef, useState } from 'react';

import { Menu, MessageCircle, X } from 'lucide-react';

import { Button } from '../Button/Button';
import { Logo } from '../Logo/Logo';

import { navItems, whatsappUrl } from '../../config/site';

import styles from './Header.module.scss';

export function Header() {
  const [open, setOpen] = useState(false);
  const [floating, setFloating] = useState(false);

  const menuId = useId();

  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const hero = document.getElementById('inicio');

    if (!hero || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFloating(!entry.isIntersecting);
      },
      {
        rootMargin: '-96px 0px 0px 0px',
      },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open]);

  useEffect(() => {
    const query = window.matchMedia('(min-width: 1024px)');

    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    query.addEventListener('change', onChange);

    return () => query.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next = !open;

    setOpen(next);

    if (next) {
      requestAnimationFrame(() => firstLinkRef.current?.focus());
    }
  };

  return (
    <header
      className={`${styles.header} ${floating ? styles.floating : ''}`}
      ref={headerRef}
    >
      <div className={styles.inner}>
        <Logo />

        <nav
          id={menuId}
          className={`${styles.nav} ${open ? styles.navOpen : ''}`}
          aria-label="Principal"
        >
          <ul className={styles.list}>
            {navItems.map((item, index) => (
              <li key={item.href}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  className={styles.link}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.panelCta}>
            <Button
              href={whatsappUrl}
              external
              icon={<MessageCircle aria-hidden="true" />}
              onClick={() => setOpen(false)}
            >
              Reservar quadra
            </Button>
          </div>
        </nav>

        <div className={styles.actions}>
          <div className={styles.headerCta}>
            <Button
              href={whatsappUrl}
              external
              compact
              icon={<MessageCircle aria-hidden="true" />}
            >
              Reservar quadra
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={toggle}
          >
            {open ? (
              <X aria-hidden="true" />
            ) : (
              <Menu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
