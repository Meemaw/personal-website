import * as React from 'react';
import { Card, List } from 'semantic-ui-react';
import styled from 'styled-components';

import ExperienceCard from './Card';

const Experience = () => {
  return (
    <ExperienceStyle>
      <Card>
        <h3>Experience</h3>
        <List divided verticalAlign="middle">
          {EXPERIENCE.map(exp => (
            <List.Item>
              <ExperienceCard key={exp.company} {...exp} />
            </List.Item>
          ))}
        </List>
      </Card>
    </ExperienceStyle>
  );
};

const ExperienceStyle = styled.div`
  padding: 20px;
  position: relative;
  z-index: 10;

  .card {
    max-width: 750px;
    margin: 0 auto;
    width: 100%;
    padding: 15px;
  }
`;

const EXPERIENCE = [
  {
    company: 'Sinergise',
    title: 'Software Engineer',
    website: 'https://www.sinergise.com/',
    logo:
      'https://media.licdn.com/dms/image/C4D0BAQFrXKp1Rbvw-A/company-logo_400_400/0?e=1548288000&v=beta&t=fKzgKnpXr5-iJ7Br_HlnxtGgZ6n5siWOEXRemY_fBw4',
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
    logo:
      'https://media.licdn.com/dms/image/C4D0BAQGOtxWZD5_zsQ/company-logo_400_400/0?e=1548288000&v=beta&t=ZYICddz7Wir2_iG6wNISvkkvRcQEep9SOUQ4gVNkWM4',
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
    logo:
      'https://media.licdn.com/dms/image/C4D0BAQFbE_lVwqQgdA/company-logo_400_400/0?e=1548288000&v=beta&t=NhE95wT5jyFWYoItku3KDmyBmT6L6AjyRaDNNXcc9vc',
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
    logo:
      'https://media.licdn.com/dms/image/C4D0BAQGUx4HQsK01Uw/company-logo_400_400/0?e=1548288000&v=beta&t=gvwyUDHB7YinZtlLenoVF_W_IgOz-wU4bemHdKVxoLQ',
    from: new Date('2016-03-01'),
    to: new Date('2016-05-01'),
  },
];

export default Experience;
