import { ROOT_PATH } from 'constants/paths';

import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Image, Menu } from 'semantic-ui-react';
import LOGO from 'images/l64.png';
import Hoverable from 'components/animation/Hoverable';

import { NavbarStyle } from './elements';

const Navbar = () => {
  return (
    <NavbarStyle className="Mavbar">
      <Hoverable>
        <Image className="Logo" src={LOGO} as={Link} to={ROOT_PATH} />
      </Hoverable>
      <Menu.Menu position="right">
        <Hoverable>
          <Menu.Item
            style={{ position: 'inherit' }}
            as="a"
            href="https://github.com/Meemaw/"
            target="_blank"
          >
            <Icon name="github" />
          </Menu.Item>
        </Hoverable>
        <Hoverable>
          <Menu.Item
            style={{ position: 'inherit' }}
            as="a"
            href="https://www.linkedin.com/in/matej-%C5%A1nuderl-56a629116/"
            target="_blank"
          >
            <Icon name="linkedin" />
          </Menu.Item>
        </Hoverable>
        <Hoverable>
          <Menu.Item as="a" href="mailto: ematej.snuderl@gmail.com" style={{ position: 'inherit' }}>
            <Icon name="mail" />
          </Menu.Item>
        </Hoverable>
      </Menu.Menu>
    </NavbarStyle>
  );
};

export default Navbar;
