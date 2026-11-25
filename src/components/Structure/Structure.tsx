import { MessageCircle } from 'lucide-react';
import { Button } from '../Button/Button';
import { CtaBanner } from '../CtaBanner/CtaBanner';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { StructureCard } from './StructureCard';
import { structureContent, whatsappUrl } from '../../config/site';
import styles from './Structure.module.scss';

export function Structure() {
  const { pillars, banner } = structureContent;

  return (
    <section id="estrutura" className={styles.section} aria-labelledby="structure-title">
      <div className={styles.container}>
        <SectionHeading
          id="structure-title"
          eyebrow={structureContent.eyebrow}
          title={
            <>
              {structureContent.titleStart}{' '}
              <span className={styles.highlight}>{structureContent.titleHighlight}</span>
            </>
          }
          description={structureContent.description}
        />

        <ul className={styles.grid}>
          {pillars.map((pillar, index) => (
            <li key={pillar.id} className={`${styles.item} ${index === 0 ? styles.first : ''}`}>
              <StructureCard pillar={pillar} index={index} total={pillars.length} />
            </li>
          ))}
        </ul>

        <div className={styles.banner}>
          <CtaBanner
            title={banner.title}
            description={banner.description}
            action={
              <Button
                href={whatsappUrl}
                variant="dark"
                external
                icon={<MessageCircle aria-hidden="true" />}
              >
                {banner.cta}
              </Button>
            }
          />
        </div>
      </div>
    </section>
  );
}