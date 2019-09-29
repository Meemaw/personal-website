import React from 'react';
import TechnologyCard from 'components/TechnologyCard';

import { TechnologiesSection } from './elements';

const Skills = () => {
  return (
    <TechnologiesSection>
      <TechnologyCard
        icon="server"
        title="Back-end Development"
        description="I value code reusability, clear design principles and attention for performance."
        languages={['Java', 'Python', 'Scala', 'C#']}
        technologies={['AWS', 'Java EE', 'Django', 'Git', 'Elasticsearch', 'Docker']}
      />

      <TechnologyCard
        icon="code"
        title="Front-end Development"
        languagesHeader="Languages spoken:"
        description="Putting User Experience (UX) in the foreground while designing web applications."
        languages={['Javascript (ES6+)', 'Typescript', 'HTML', 'CSS']}
        technologies={[
          'React',
          'Webpack',
          'Jest',
          'Redux',
          'Mobx',
          'JQuery',
          'Lambda@Edge',
          'Nightwatch',
        ]}
      />

      <TechnologyCard
        icon="database"
        title="Databases"
        languagesHeader="Databases I trust:"
        description="Giving special attetion to database design and its scalability. I enjoy databse optimizations for any kind of performance gains."
        languages={['PostgreSQL', 'DynamoDB', 'Hazelcast', 'Redis']}
      />
    </TechnologiesSection>
  );
};

export default Skills;
