import React from 'react';
import { CommitWithEvent } from 'meta/types/github';

import CommitFooter from './Footer';
import Title from './Title';
import { CommitCard } from './elements';

type Props = {
  commit: CommitWithEvent;
};

const CommitMessage = ({ commit }: Props) => {
  return (
    <CommitCard>
      <Title
        message={commit.message}
        repoName={commit.repo.name}
        commitUrl={commit.url}
        repoUrl={commit.repo.url}
      />

      <CommitFooter
        createdAt={commit.createdAt}
        username={commit.actor.login}
        avatarUrl={commit.actor.avatar_url}
      />
    </CommitCard>
  );
};

export default CommitMessage;
