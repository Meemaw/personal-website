import React from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';
import { GithubRepositoryDTO } from 'meta/types/github';

import { ShowcareRepoCard } from './elements';

type Props = {
  repo: GithubRepositoryDTO;
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

      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="RepoName">
        <h3>{repo.full_name}</h3>
      </a>

      <p style={{ fontWeight: 300 }}>{repo.description}</p>
    </ShowcareRepoCard>
  );
};

export default ShowcareRepo;
