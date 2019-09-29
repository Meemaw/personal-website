import { format } from 'date-fns';
import React from 'react';
import { Image } from 'semantic-ui-react';

import { Footer } from './elements';

type Props = {
  avatarUrl: string;
  username: string;
  createdAt: Date;
};

const CommitFooter = ({ avatarUrl, username, createdAt }: Props) => {
  const commitedOn = format(createdAt, 'd MMM yyyy');

  return (
    <Footer>
      <Image className="Avatar" src={avatarUrl} />
      <div style={{ textAlign: 'left' }}>
        <a href="https://github.com/Meemaw/" target="_blank" rel="noopener noreferrer">
          {username}
        </a>
        {` commited on: ${commitedOn}`}
      </div>
    </Footer>
  );
};

export default CommitFooter;
