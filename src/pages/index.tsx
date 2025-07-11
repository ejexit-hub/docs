import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '../components/HomepageFeatures';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout title="ExitTech Wiki" description="Technical documentation and knowledge base for ExitTech">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <BackgroundGradientAnimation>
          <div className="container relative z-10">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem', marginBottom: 0 }}>
              <img
                src="/img/logo-main.png"
                alt="ExitTech Logo"
                style={{ width: 54, height: 54, marginRight: 0, display: 'block' }}
              />
              <h1 className={styles.heroTitleAccent + ' hero__title'} style={{ margin: 0, lineHeight: 1 }}>ExitTech Wiki</h1>
            </div>
            <p className={styles.heroSubtitleAccent + ' hero__subtitle'}>Technical documentation and knowledge base for ExitTech</p>
            <p className={styles.heroIntroAccent}>
              Your central hub for technical excellence. Discover comprehensive guides, expert insights, and cutting-edge solutions that empower teams to achieve breakthrough results. From quick troubleshooting to deep technical mastery—everything you need is right here.
            </p>
          </div>
        </BackgroundGradientAnimation>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
