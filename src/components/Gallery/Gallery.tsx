import { useState } from 'react';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { GalleryStrip } from './GalleryStrip';
import { Lightbox } from './Lightbox';
import { galleryContent } from '../../config/site';
import styles from './Gallery.module.scss';

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="galeria" className={styles.section} aria-labelledby="gallery-title">
      <div className={styles.container}>
        <SectionHeading
          id="gallery-title"
          tone="light"
          eyebrow={galleryContent.eyebrow}
          title={
            <>
              {galleryContent.titleStart}{' '}
              <span className={styles.highlight}>{galleryContent.titleHighlight}</span>
            </>
          }
          description={galleryContent.description}
        />
      </div>

      <GalleryStrip items={galleryContent.items} onOpen={setOpenIndex} />

      <Lightbox
        items={galleryContent.items}
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  );
}