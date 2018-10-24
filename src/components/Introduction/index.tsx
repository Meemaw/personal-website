import * as React from 'react';
import SplitText from 'react-pose-text';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';

import BITMOJI from '../../images/bitmoji.png';
import WORKSPACE from '../../images/workspace.png';
import Cursor from '../animation/Cursor';

const Introduction = () => {
  return (
    <section className="Introduction">
      <IntroSection>
        <VerticalFlex>
          <Title>
            <SplitText charPoses={titlePoses} initialPose="exit" pose="enter">
              Software Engineer and Tech Enthusiast
            </SplitText>
          </Title>
          <Subtitle>
            <SplitText charPoses={subtitlePoses} initialPose="exit" pose="enter">
              I write scalable and maintanable code, and I love what I do
            </SplitText>
            <Cursor />
          </Subtitle>
          <Image src={BITMOJI} style={{ width: '250px', height: '250px' }} />
        </VerticalFlex>
      </IntroSection>
      <WorkspaceSection>
        <Image src={WORKSPACE} style={{ height: 'auto', margin: '0 auto', maxHeight: '260px' }} />
      </WorkspaceSection>
    </section>
  );
};

const WorkspaceSection = styled.section`
  padding: 100px;
  background: #2d3038;
  padding-bottom: 100px !important;

  @media screen and (max-width: 750px) {
    padding: 50px;
  }

  @media screen and (max-width: 630px) {
    padding: 30px;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 300;
  text-align: center;
`;

const IntroSection = styled.div`
  padding: 3rem 1.5rem;
`;

const VerticalFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const titlePoses = {
  exit: { opacity: 0 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }: any) => charIndex * 30,
  },
};

const subtitlePoses = {
  ...titlePoses,
  enter: {
    ...titlePoses.enter,
    delay: ({ charIndex }: any) => 1000 + charIndex * 30,
  },
};

export default Introduction;
