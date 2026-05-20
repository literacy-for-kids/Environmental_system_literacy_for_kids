// @ts-check

import {createRequire} from 'node:module';

const require = createRequire(import.meta.url);
const {hub, curricula} = require('literacy-site-theme/ecosystem');
const currentSiteHref = 'https://literacy-for-kids.github.io/environmental_system_literacy/';

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  curriculumSidebar: [
    'intro',
    {
      type: 'category',
      label: 'The Planetary Engine',
      description: 'Weeks 1–3: Thermodynamics, energy flow, and the sun',
      collapsed: false,
      items: [
        'week01-the-planetary-engine',
        'week02-thermodynamics-basics',
        'week03-the-terrarium-test',
      ],
    },
    {
      type: 'category',
      label: 'The Plumbing and the Supply Chain',
      description: 'Weeks 4–7: Biogeochemical cycles and mass conservation',
      items: [
        'week04-the-water-cycle',
        'week05-the-carbon-cycle',
        'week06-the-nitrogen-cycle',
        'week07-the-away-audit',
      ],
    },
    {
      type: 'category',
      label: 'System Limits and Load Balancing',
      description: 'Weeks 8–10: Carrying capacity and population dynamics',
      items: [
        'week08-carrying-capacity',
        'week09-population-dynamics',
        'week10-the-depletion-simulation',
      ],
    },
    {
      type: 'category',
      label: 'Re-Engineering the Interface',
      description: 'Weeks 11–14: Circular economics and closing the loop',
      items: [
        'week11-the-linear-api',
        'week12-circular-design',
        'week13-right-to-repair',
        'week14-the-circular-redesign',
      ],
    },
    {
      type: 'category',
      label: 'The Redesign Project',
      description: 'Weeks 15–18: Design, propose, and present a circular solution',
      items: [
        'week15-from-audit-to-proposal',
        'week16-engineering-the-solution',
        'week17-proposal-refinement',
        'week18-the-community-pitch',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Topics',
      description: 'Optional extension weeks',
      items: [
        'week-optional-1-feedback-loops-advanced',
        'week-optional-2-geoengineering',
      ],
    },
    'curriculum-overview',
    'glossary',
    {
      type: 'category',
      label: 'Explore Other Literacies',
      items: [
        {type: 'link', label: hub.label, href: hub.href},
        ...curricula
          .filter((curriculum) => curriculum.href !== currentSiteHref)
          .map((curriculum) => ({
            type: 'link',
            label: curriculum.label,
            href: curriculum.href,
          })),
      ],
    },
    'license',
  ],
};

export default sidebars;
