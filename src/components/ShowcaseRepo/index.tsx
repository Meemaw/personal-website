import * as React from 'react';
import { Button, Card, Icon, Label } from 'semantic-ui-react';
import styled from 'styled-components';

import { GithubRepository } from '../../meta/types/GithubRepository';

type Props = {
  repo: GithubRepository;
};

const ShowcareRepo = ({ repo }: Props) => {
  return (
    <ShowcareRepoCard>
      <section className="Actions">
        <Button as="div" labelPosition="left">
          <Button size="tiny">
            <Icon name="star" />
            Star
          </Button>
          <Label as="a" basic content={repo.stargazers_count} />
        </Button>

        <Button as="div" labelPosition="left">
          <Button size="tiny">
            <Icon name="fork" />
            Fork
          </Button>
          <Label as="a" basic content={repo.forks} />
        </Button>

        <Button as="div" labelPosition="left">
          <Button size="tiny">
            <Icon name="eye" />
            Watchers
          </Button>
          <Label as="a" basic content={repo.watchers} />
        </Button>
      </section>

      <a href={repo.html_url} target="_blank" className="RepoName">
        <h3>{repo.full_name}</h3>
      </a>

      <p style={{ fontWeight: 300 }}>{repo.description}</p>
    </ShowcareRepoCard>
  );
};

const ShowcareRepoCard = styled(Card)`
  padding: 15px !important;
  max-width: 500px !important;
  width: 100% !important;

  .RepoName {
    margin: 26px;
  }

  .Actions {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    margin: 0px !important;

    .Actions {
      flex-direction: column;
    }

    button {
      width: 150px;
    }

    .Actions > div {
      width: 100%;
      justify-content: center;
    }
  }
`;

export default ShowcareRepo;
