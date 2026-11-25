import { Mail, MapPin, MessageCircle, Navigation } from 'lucide-react';
import { Button } from '../Button/Button';
import { SectionHeading } from '../SectionHeading/SectionHeading';
import { ContactItem } from './ContactItem';
import { locationContent, whatsappUrl } from '../../config/site';
import styles from './Location.module.scss';

const icons = {
  address: <MapPin />,
  whatsapp: <MessageCircle />,
  email: <Mail />,
} as const;

export function Location() {
  return (
    <section id="localizacao" className={styles.section} aria-labelledby="location-title">
      <div className={styles.container}>
        <SectionHeading
          id="location-title"
          tone="light"
          eyebrow={locationContent.eyebrow}
          title={
            <>
              {locationContent.titleStart}{' '}
              <span className={styles.highlight}>{locationContent.titleHighlight}</span>
            </>
          }
          description={locationContent.description}
        />

        <div className={styles.layout}>
          <div className={styles.info}>
            <ul className={styles.contacts}>
              {locationContent.contacts.map((contact) => (
                <li key={contact.id}>
                  <ContactItem
                    icon={icons[contact.id]}
                    label={contact.label}
                    value={contact.value}
                    detail={contact.detail}
                    href={contact.href}
                    external={contact.external}
                  />
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Button
                href={locationContent.directionsUrl}
                external
                icon={<Navigation aria-hidden="true" />}
              >
                {locationContent.directionsCta}
              </Button>
              <Button
                href={whatsappUrl}
                variant="outline"
                external
                icon={<MessageCircle aria-hidden="true" />}
              >
                {locationContent.whatsappCta}
              </Button>
            </div>
          </div>

          <div className={styles.map}>
            <iframe
              className={styles.frame}
              src={locationContent.mapEmbedUrl}
              title={locationContent.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}