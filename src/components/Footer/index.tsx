import React from 'react';
import Particles from 'react-particles-js';
import Cursor from 'components/animation/Cursor';

import { FooterStyle, PARTICLES_PARAMS } from './elements';

const Footer = () => {
  return (
    <FooterStyle>
      <section className="FooterContent">
        <section className="About">
          <div>
            <h2>About me:</h2>
            <div style={{ maxWidth: '500px', margin: '0 auto' }}>
              <p style={{ fontWeight: 600, opacity: 0.8 }}>
                Great, You have made in this far. It&apos;s time tell you a little more about
                myself. I&apos;m a young and innovative Software Engineer with huge motivation,
                passion for technology and many ideas. Functional Programming enthusiast with
                interest in Software Architecture, Scalable Systems, Microservices, Artificial
                Intelligence, Machine Learning and Data Science.
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

export default Footer;
