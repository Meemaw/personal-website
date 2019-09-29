import React from 'react';

import { Title } from './elements';

type Props = {
  message: string;
  repoName: string;
  commitUrl: string;
  repoUrl: string;
};

const CommitTitle = ({ message, repoName, commitUrl, repoUrl }: Props) => {
  return (
    <Title>
      <span>Commited </span>
      <a href={commitUrl} target="_blank" rel="noopener noreferrer">
        &quot;{message}&quot;
      </a>
      <span> to Github repository </span>
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        {repoName}
      </a>
    </Title>
  );
};

export default CommitTitle;
