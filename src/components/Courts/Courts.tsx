import { MessageCircle } from 'lucide-react';
import { Button } from '../Button/Button';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { CourtsCarousel } from './CourtsCarousel';
import { courtsContent, whatsappUrl } from '../../config/site';
import styles from './Courts.module.scss';

export function Courts() {
  return (
    <section id="quadras" className={styles.section} aria-labelledby="courts-title">
      <div className={styles.container}>
        <SectionHeading
          id="courts-title"
          tone="light"
          eyebrow={courtsContent.eyebrow}
          title={
            <>
              {courtsContent.titleStart}{' '}
              <span className={styles.highlight}>{courtsContent.titleHighlight}</span>{' '}
              {courtsContent.titleEnd}
            </>
          }
          description={courtsContent.description}
          action={
            <Button href={whatsappUrl} external compact icon={<MessageCircle aria-hidden="true" />}>
              {courtsContent.action}
            </Button>
          }
        />
      </div>

      <CourtsCarousel
        courts={courtsContent.courts}
        label={courtsContent.carouselLabel}
        cta={courtsContent.cta}
        previousLabel={courtsContent.previousLabel}
        nextLabel={courtsContent.nextLabel}
      />
    </section>
  );
}