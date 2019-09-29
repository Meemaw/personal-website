import React from 'react';
import SplitText from 'react-pose-text';
import { Image } from 'semantic-ui-react';
import BITMOJI from 'images/bitmoji.png';
import WORKSPACE from 'images/workspace.png';
import Cursor from 'components/animation/Cursor';

import {
  IntroSection,
  VerticalFlex,
  Title,
  Subtitle,
  WorkspaceSection,
  TitlePoses,
  SubtitlePoses,
} from './elements';

const Introduction = () => {
  return (
    <section className="Introduction">
      <IntroSection>
        <VerticalFlex>
          <Title>
            <SplitText charPoses={TitlePoses} initialPose="exit" pose="enter">
              Software Engineer and Tech Enthusiast
            </SplitText>
          </Title>
          <Subtitle>
            <SplitText charPoses={SubtitlePoses} initialPose="exit" pose="enter">
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

export default Introduction;
