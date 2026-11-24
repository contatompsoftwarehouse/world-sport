import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { Button } from '../Button/Button';
import { heroContent, whatsappUrl } from '../../config/site';
import styles from './Hero.module.scss';

const chipTones = ['sky', 'peach', 'mint'] as const;

export function Hero() {
  const { photo, subject } = heroContent;

  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.frame}>
        <img
          className={styles.photo}
          src={photo.src}
          srcSet={photo.srcSet}
          sizes="100vw"
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          fetchPriority="high"
          decoding="async"
        />
        <div className={styles.overlay} aria-hidden="true" />

        <div className={styles.top}>
          <p className={styles.eyebrow}>{heroContent.eyebrow}</p>
          <h1 id="hero-title" className={styles.title}>
            {heroContent.titleStart}{' '}
            <span className={styles.highlight}>{heroContent.titleHighlight}</span>
          </h1>
        </div>

        {subject && <img className={styles.subject} src={subject.src} alt={subject.alt} />}

        <div className={styles.bottom}>
          <div className={styles.intro}>
            <p className={styles.description}>{heroContent.description}</p>
            <div className={styles.actions}>
              <Button href={whatsappUrl} external icon={<MessageCircle aria-hidden="true" />}>
                {heroContent.primaryCta}
              </Button>
              <Button
                href={heroContent.secondaryHref}
                variant="secondary"
                icon={<ArrowDownRight aria-hidden="true" />}
              >
                {heroContent.secondaryCta}
              </Button>
            </div>
          </div>

          <aside className={styles.card} aria-label={heroContent.modalitiesLabel}>
            <p className={styles.cardLabel}>{heroContent.modalitiesLabel}</p>
            <ul className={styles.chips}>
              {heroContent.modalities.map((name, index) => (
                <li key={name} className={`${styles.chip} ${styles[chipTones[index % chipTones.length]]}`}>
                  {name}
                </li>
              ))}
            </ul>
            <p className={styles.cardNote}>{heroContent.modalitiesNote}</p>
          </aside>
        </div>
      </div>
    </section>
  );
}