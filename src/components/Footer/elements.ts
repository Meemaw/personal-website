import styled from 'styled-components';
import { IParticlesParams } from 'react-particles-js';

export const FooterStyle = styled.section`
  background: #2d3038;
  z-index: 0;
  position: relative;
  margin-top: 45px;

  @media screen and (max-width: 650px) {
    p {
      font-size: 0.7rem !important;
    }
  }

  .About {
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 10px;
  }

  .Copyright {
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 10px;
  }

  .FooterContent {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    color: white;
    font-size: 0.8rem;
  }

  @media screen and (min-width: 600px) {
    margin-top: -45px !important;
  }
`;

export const PARTICLES_PARAMS: IParticlesParams = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: false,
      },
    },
    size: {
      value: 4,
      random: true,
      anim: {
        speed: 5,
        // eslint-disable-next-line @typescript-eslint/camelcase
        size_min: 0.35,
      },
    },
    // eslint-disable-next-line @typescript-eslint/camelcase
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 1.5,
      direction: 'top',
      // eslint-disable-next-line @typescript-eslint/camelcase
      out_mode: 'out',
    },
  },
};
