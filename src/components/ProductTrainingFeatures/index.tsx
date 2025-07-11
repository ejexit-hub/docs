import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import { 
  Laptop, 
  Server, 
  Network, 
  CreditCard, 
  HardDrive, 
  Cpu, 
  MemoryStick, 
  Smartphone, 
  Database, 
  Tablet,
  Monitor
} from 'lucide-react';

const ProductCategoryList = [
  {
    title: 'Laptops & Desktops',
    Icon: Laptop,
    link: './laptops-desktops',
    description: 'Business computers, brands, specs, and condition assessment for portable and desktop systems.'
  },
  {
    title: 'Servers',
    Icon: Server,
    link: './servers',
    description: 'Enterprise server hardware, key features, and requirements for data center equipment.'
  },
  {
    title: 'Networking',
    Icon: Network,
    link: './networking',
    description: 'Switches, routers, firewalls, and network infrastructure equipment evaluation.'
  },
  {
    title: 'Cards',
    Icon: CreditCard,
    link: './cards',
    description: 'Graphics, network, and RAID expansion cards and their market value assessment.'
  },
  {
    title: 'Storage & Drives',
    Icon: HardDrive,
    link: './drives',
    description: 'All storage solutions: HDDs, SSDs, NVMe drives, external storage, NAS, and SAN systems.'
  },
  {
    title: 'Processors',
    Icon: Cpu,
    link: './processors',
    description: 'CPU identification and evaluation for desktops, servers, and mobile devices.'
  },
  {
    title: 'Memory',
    Icon: MemoryStick,
    link: './memory',
    description: 'RAM types, sizes, and value assessment across different system configurations.'
  },
  {
    title: 'GPU',
    Icon: Monitor,
    link: './gpu',
    description: 'Graphics processing units for gaming, professional workstations, and AI applications.'
  },
  {
    title: 'Phones',
    Icon: Smartphone,
    link: './phones',
    description: 'Business and consumer phones, condition, carrier status, and accessory evaluation.'
  },
  {
    title: 'Tablets',
    Icon: Tablet,
    link: './tablets',
    description: 'Screen quality, battery health, supported accessories, and market positioning.'
  }
];

function ProductCategory({title, Icon, link, description}: {
  title: string; 
  Icon: any; 
  link: string; 
  description: string;
}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.categoryLink}>
        <div className={clsx('text--center', styles.categoryCard)}>
          <div className="text--center">
            <Icon size={40} strokeWidth={1.5} className={styles.categorySvg} role="img" />
          </div>
          <div className="text--center padding-horiz--md">
            <Heading as="h3" className={styles.categoryTitle}>{title}</Heading>
            <p className={styles.categoryDescription}>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function ProductTrainingFeatures(): ReactNode {
  return (
    <section className={styles.categories}>
      <div className="container">
        <div className="row">
          {ProductCategoryList.map((props, idx) => (
            <ProductCategory key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}