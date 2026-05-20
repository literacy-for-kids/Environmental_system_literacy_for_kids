import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import {hub, curricula} from 'literacy-site-theme/ecosystem';
import styles from './styles.module.css';

const features = [
  {
    title: 'There is No "Away"',
    description:
      'Earth is a closed system for matter. Students learn to trace the complete lifecycle of materials — waste is a system output that must become an input elsewhere.',
  },
  {
    title: 'Energy Flows, Matter Cycles',
    description:
      'Energy from the sun flows through the system and bleeds off as heat, but physical matter must be continuously recycled through the plumbing of the planet.',
  },
  {
    title: 'The Linear vs. Circular API',
    description:
      'Natural systems run on a circular API. Human industrial systems run on a linear one. The environmental crisis is an API mismatch between these two operating systems.',
  },
  {
    title: 'Carrying Capacity',
    description:
      'Every environment has a structural limit to the load it can support. Students learn to view resource depletion as demand exceeding the regenerative bandwidth.',
  },
  {
    title: 'Feedback Loops',
    description:
      'Students explore balancing loops that stabilize systems and amplifying loops that lead to runaway states — applying systems thinking to the planet itself.',
  },
];

const roadmapSections = [
  {
    title: 'The Planetary Engine',
    weeks: 'Weeks 1–3',
    description: 'Thermodynamics, energy flow, and the sun',
  },
  {
    title: 'The Plumbing & The Supply Chain',
    weeks: 'Weeks 4–7',
    description: 'Biogeochemical cycles and mass conservation',
  },
  {
    title: 'System Limits & Load Balancing',
    weeks: 'Weeks 8–10',
    description: 'Carrying capacity and population dynamics',
  },
  {
    title: 'Re-Engineering the Interface',
    weeks: 'Weeks 11–14',
    description: 'Circular economics and closing the loop',
  },
  {
    title: 'The Redesign Project',
    weeks: 'Weeks 15–18',
    description: 'Design, propose, and present a circular solution',
  },
];

const currentSiteHref = 'https://literacy-for-kids.github.io/environmental_system_literacy/';

function FeatureCard({title, description}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function RoadmapCard({title, weeks, description}) {
  return (
    <article className={styles.roadmapCard}>
      <p className={styles.eyebrow}>{weeks}</p>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </article>
  );
}

function LiteracyCard({label, href, description, isCurrent}) {
  return (
    <article className={styles.card}>
      <Heading as="h3">
        <Link href={href} className={styles.literacyLink}>
          {label}
        </Link>
        {isCurrent && <span className={styles.currentBadge}>Current curriculum</span>}
      </Heading>
      <p>{description}</p>
    </article>
  );
}

export default function HomepageFeatures() {
  return (
    <div className={styles.pageSections}>
      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Introduction</Heading>
          <p className={styles.sectionLead}>
            Environmental Systems Literacy is an 18-week curriculum for ages 8–12, built for
            classroom teachers, homeschool families, caregivers, and after-school leaders.
            Students take an engineering approach to the planet — learning how natural systems
            handle energy and matter, how human industrial systems interface with them, and how
            to identify and fix the failure modes when those two systems clash.
          </p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Part of the Literacy for Kids Ecosystem</Heading>
          <p className={styles.sectionLead}>
            This curriculum is part of{' '}
            <Link href={hub.href}>{hub.label}</Link>
            , a collection of open-source curricula designed to help children
            ages 8–12 understand the systems that shape the modern world.
          </p>
          <div className={styles.callout}>
            <Heading as="h3">Explore the other literacies</Heading>
            <div className={styles.cardGrid}>
              {curricula.map((literacy) => (
                <LiteracyCard
                  key={literacy.href}
                  {...literacy}
                  isCurrent={literacy.href === currentSiteHref}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <Heading as="h2">Core Concepts</Heading>
          <p className={styles.sectionLead}>
            The curriculum is organized around mental models that help students transition from
            abstract environmentalism to rigorous, physical systems-thinking.
          </p>
          <div className={styles.cardGrid}>
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Heading as="h2">Curriculum Roadmap</Heading>
          <p className={styles.sectionLead}>
            The learning progression moves from planetary thermodynamics through biogeochemical
            cycles, system limits, and circular economics, culminating in a real-world
            redesign proposal presented to a community audience.
          </p>
          <div className={styles.roadmapGrid}>
            {roadmapSections.map((section) => (
              <RoadmapCard key={section.title} {...section} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="container">
          <Heading as="h2">Start Teaching Environmental Systems Literacy</Heading>
          <p className={styles.sectionLead}>
            Begin with the Welcome page for an overview, then jump into Week 1.
            Each session is about 20 minutes — designed for ages 8–12.
          </p>
          <div className={styles.ctaButtons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Get Started
            </Link>
          </div>
          <p className={styles.feedbackPrompt}>
            Found a mistake or have a suggestion?{' '}
            <Link to="https://github.com/literacy-for-kids/environmental_system_literacy/issues">
              Open an issue on GitHub.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
