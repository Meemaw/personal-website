import * as React from 'react';
import styled from 'styled-components';

import TechnologyCard from '../TechnologyCard';

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

const TechnologiesSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 0px;
  margin-top: -45px;

  > .card {
    margin: 0 40px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 0 20px;

    > .card {
      width: 100%;
      margin: 10px 0;
    }
  }
`;

export default Skills;
