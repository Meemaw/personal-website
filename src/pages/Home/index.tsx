import * as React from 'react';
import { Divider } from 'semantic-ui-react';

import Experience from '../../components/Experience';
import Footer from '../../components/Footer';
import Introduction from '../../components/Introduction';
import RecentActivity from '../../components/RecentActivity';
import Skills from '../../components/Skills';

const HomePage = () => {
  return (
    <React.Fragment>
      <Introduction />
      <Skills />
      <Divider />
      <Experience />
      <RecentActivity />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
