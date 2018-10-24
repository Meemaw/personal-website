import { format } from 'date-fns';
import * as React from 'react';
import { Image } from 'semantic-ui-react';
import styled from 'styled-components';

type Props = {
  avatar_url: string;
  username: string;
  created_at: Date;
};

const CommitFooter = ({ avatar_url, username, created_at }: Props) => {
  return (
    <FooterStyle>
      <Image className="Avatar" src={avatar_url} />
      <div style={{ textAlign: 'left' }}>
        <a href="https://github.com/Meemaw/" target="_blank">
          {username}
        </a>
        {` commited on: ${format(created_at, 'D MMM YYYY')}`}
      </div>
    </FooterStyle>
  );
};

const FooterStyle = styled.div`
  display: flex;
  font-size: 0.9rem;
  margin-top: 8px;
  font-weight: 400;
  color: #586069;
  align-items: center;

  .Avatar {
    height: 23px;
    min-width: 23px;
    margin-right: 8px;
    align-self: flex-start;
  }

  a {
    color: #586069;
    font-weight: 600;
  }
`;

export default CommitFooter;
