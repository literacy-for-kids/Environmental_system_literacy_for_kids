import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContent)}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>Free and open educational curriculum</p>
          <h1 className="hero__title">Environmental Systems Literacy</h1>
          <p className="hero__subtitle">
            A free, open curriculum that teaches ages 8–12 how planetary systems work and where human infrastructure fits into them.
          </p>
          <p className={styles.heroLead}>
            18 weeks of hands-on, experiment-driven lessons — each about 20 minutes
            per session — designed for classrooms, homeschool families, after-school
            clubs, and any adult who wants to help kids move from vague environmental
            feelings to rigorous, physical systems-thinking about the planet they live on.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Start the Curriculum
            </Link>
            <Link
              className="button button--outline button--lg"
              to="https://github.com/literacy-for-kids/environmental_system_literacy">
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="A free, open 18-week curriculum that teaches ages 8–12 how planetary systems work and where human infrastructure fits into them.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
