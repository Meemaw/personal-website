import * as React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

import { Commit } from '../../meta/types/GithubEvent';
import CommitFooter from './Footer';
import Title from './Title';

type Props = {
  commit: Commit;
};

const CommitMessage = ({ commit }: Props) => {
  return (
    <CommitCardStyle>
      <Title
        message={commit.message}
        repoName={commit.repo.name}
        commitUrl={commit.url}
        repoUrl={commit.repo.url}
      />

      <CommitFooter
        created_at={commit.created_at}
        username={commit.actor.login}
        avatar_url={commit.actor.avatar_url}
      />
    </CommitCardStyle>
  );
};

const CommitCardStyle = styled(Card)`
  padding: 15px !important;
  max-width: 500px !important;
  width: 100% !important;

  @media screen and (max-width: 500px) {
    margin: 0px !important;
  }
`;

export default CommitMessage;
