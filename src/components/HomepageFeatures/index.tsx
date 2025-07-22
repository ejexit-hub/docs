import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { Book, RefreshCw, Compass, Users, BookOpen } from 'lucide-react';

const FeatureList = [
  {
    title: 'Comprehensive Guides',
    Icon: Book,
    description: (
      <>
        Step-by-step guides and detailed documentation for all ExitTech products and services. From beginner tutorials to advanced technical references.
      </>
    ),
  },
  {
    title: 'IT Asset Glossary',
    Icon: BookOpen,
    description: (
      <>
        Essential terminology and abbreviations for IT asset management. Quick reference for technical terms, hardware components, and industry standards.
      </>
    ),
  },
  {
    title: 'Smart Navigation',
    Icon: Compass,
    description: (
      <>
        Find exactly what you need with our intelligent search, intuitive categorization, and streamlined navigation system.
      </>
    ),
  },
  {
    title: 'Expert Support',
    Icon: Users,
    description: (
      <>
        Get help when you need it. Connect with our technical team and vibrant community for support, feedback, and collaboration.
      </>
    ),
  },
];

function Feature({title, Icon, description}: {title: string; Icon: any; description: ReactNode}) {
  const isGlossary = title === 'IT Asset Glossary';
  
  return (
    <div className={clsx('col col--3')}>
      {isGlossary ? (
        <a href="/it-glossary" className={clsx('text--center', styles.featureCard, 'no-underline')} style={{ display: 'block', textDecoration: 'none' }}>
          <div className="text--center">
            <Icon size={48} strokeWidth={1.5} className={styles.featureSvg} role="img" />
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
            <p className={styles.featureDescription}>{description}</p>
          </div>
        </a>
      ) : (
        <div className={clsx('text--center', styles.featureCard)}>
          <div className="text--center">
            <Icon size={48} strokeWidth={1.5} className={styles.featureSvg} role="img" />
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
            <p className={styles.featureDescription}>{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
