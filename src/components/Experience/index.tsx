import React from 'react';
import { Card, List } from 'semantic-ui-react';

import ExperienceCard from './Card';
import { ExperienceStyle } from './elements';

const EXPERIENCE = [
  {
    company: 'Sinergise',
    title: 'Software Engineer',
    website: 'https://www.sinergise.com/',
    from: new Date('2017-07-01'),
    responsibilites: [
      'Integration of Rate Limiting into our core services',
      'Set up CI process for automatic deployment and testing of our frontend apps',
      'Building RESTfull Web Applications in Java EE',
      'Written multiple SPA in React',
      '...',
    ],
  },
  {
    company: 'Zemanta',
    title: 'Data Scientist Intern',
    website: 'http://www.zemanta.com/',
    from: new Date('2017-01-01'),
    to: new Date('2017-03-01'),
    responsibilites: [
      'Research on feature transforms with ensembles of trees for improvements in predicting Click-through rate (CTR) in real time bidding system',
    ],
  },

  {
    company: 'Celtra Inc.',
    title: 'Software Developer Intern',
    website: 'https://www.celtra.com/',
    from: new Date('2016-07-01'),
    to: new Date('2016-08-01'),
    responsibilites: [
      'Working on migration to PHP 7 from PHP 5',
      'Written proof of concept implementation for actor based event processing in Scala',
    ],
  },

  {
    company: 'Jozef Stefan Institute',
    title: 'Android Developer / Researcher',
    website: 'https://www.ijs.si/ijsw',
    from: new Date('2016-03-01'),
    to: new Date('2016-05-01'),
  },
];

const Experience = () => {
  return (
    <ExperienceStyle>
      <Card>
        <h3>Experience</h3>
        <List divided verticalAlign="middle">
          {EXPERIENCE.map(exp => (
            <List.Item key={exp.company}>
              <ExperienceCard key={exp.company} {...exp} />
            </List.Item>
          ))}
        </List>
      </Card>
    </ExperienceStyle>
  );
};

export default Experience;
