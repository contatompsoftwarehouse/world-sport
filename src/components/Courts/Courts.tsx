import { MessageCircle } from 'lucide-react';
import { Button } from '../Button/Button';
import { CourtsCarousel } from './CourtsCarousel';
import { courtsContent, whatsappUrl } from '../../config/site';
import styles from './Courts.module.scss';

export function Courts() {
  return (
    <section id="quadras" className={styles.section} aria-labelledby="courts-title">
      <div className={styles.container}>
        <div className={styles.heading}>
          <div className={styles.headingMain}>
            <h2 id="courts-title" className={styles.title}>
              {courtsContent.titleStart}{' '}
              <span className={styles.highlight}>{courtsContent.titleHighlight}</span>{' '}
              {courtsContent.titleEnd}
            </h2>
          </div>

          <div className={styles.headingAside}>
            <Button href={whatsappUrl} external compact icon={<MessageCircle aria-hidden="true" />}>
              {courtsContent.action}
            </Button>
            <p className={styles.description}>{courtsContent.description}</p>
          </div>
        </div>
      </div>

      <div className={styles.carouselArea}>
        <CourtsCarousel
          courts={courtsContent.courts}
          label={courtsContent.carouselLabel}
          cta={courtsContent.cta}
          previousLabel={courtsContent.previousLabel}
          nextLabel={courtsContent.nextLabel}
        />
      </div>
    </section>
  );
}