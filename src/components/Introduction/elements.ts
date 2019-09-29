import styled from 'styled-components';
import { PoseProps } from 'react-pose-text/lib/SplitText';

export const WorkspaceSection = styled.section`
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

export const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 300;
  text-align: center;
`;

export const IntroSection = styled.div`
  padding: 3rem 1.5rem;
`;

export const VerticalFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TitlePoses: PoseProps = {
  exit: { opacity: 0 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }: { charIndex: number }) => charIndex * 30,
  },
};

export const SubtitlePoses: PoseProps = {
  ...TitlePoses,
  enter: {
    ...TitlePoses.enter,
    delay: ({ charIndex }: { charIndex: number }) => 1000 + charIndex * 30,
  },
};
