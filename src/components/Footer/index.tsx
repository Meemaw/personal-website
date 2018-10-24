import * as React from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';

import Cursor from '../animation/Cursor';

const Footer = () => {
  return (
    <FooterStyle>
      <section className="FooterContent">
        <section className="About">
          <div>
            <h2>About me:</h2>
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <p style={{ fontWeight: 600, opacity: 0.8 }}>
                Great, You have made in this far. It's time tell you a little more about myself. I'm
                a young and innovative Software Engineer with huge motivation, passion for
                technology and many ideas. Functional Programming enthusiast with interest in
                Software Architecture, Scalable Systems, Microservices, Artificial Intelligence,
                Machine Learning and Data Science.
                <br />
                <br />I try to spend most of my free time enyoing sporting activities like running
                and hiking. While not doing that, one might find me cooking, barbecuing or working
                on my new personal projects. Every now and then I have to satisfy my adventure needs
                and visit some undiscovered countries.
              </p>
            </div>
          </div>
        </section>
        <p className="Copyright">
          Copyright © 2018 Matej Šnuderl
          <Cursor />
        </p>
      </section>

      <Particles width="100%" height="380px" params={PARTICLES_PARAMS} />
    </FooterStyle>
  );
};

const PARTICLES_PARAMS = {
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
        size_min: 0.35,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 1.5,
      direction: 'top',
      out_mode: 'out',
    },
  },
};

const FooterStyle = styled.section`
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

export default Footer;
