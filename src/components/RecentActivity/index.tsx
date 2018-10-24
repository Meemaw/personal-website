import { orderBy } from 'lodash';
import * as React from 'react';
import { Divider } from 'semantic-ui-react';
import styled from 'styled-components';

import { Commit, toGithubEvent } from '../../meta/types/GithubEvent';
import { GithubRepository } from '../../meta/types/GithubRepository';
import { GithubResource } from '../../resources';
import CommitMessage from '../CommitMessage';
import ShowcareRepo from '../ShowcaseRepo';

type State = {
  repos: GithubRepository[];
  commits: Commit[];
  githubApiError: boolean;
};

class RecentActivity extends React.Component<object, State> {
  state: State = { repos: [], commits: [], githubApiError: false };

  async componentDidMount() {
    try {
      const repos = await GithubResource.getRepos({ user: 'Meemaw' });
      const top3 = orderBy(repos, ['stargazers_count'], 'desc').slice(0, 3);
      this.setState({ repos: top3 });

      const serverEvents = await GithubResource.getEvents({ user: 'Meemaw' });
      const listOfListOfCommits = serverEvents
        .map(toGithubEvent)
        .filter(event => event.type === 'PushEvent')
        .map(event =>
          event.payload.commits.map(commit => ({
            ...commit,
            url: commit.url
              .replace('api.', '')
              .replace('/repos', '')
              .replace('commits', 'commit'),
            repo: {
              ...event.repo,
              url: event.repo.url.replace('api.', '').replace('/repos', ''),
            },
            actor: event.actor,
            created_at: new Date(event.created_at),
          })),
        );

      const commits = [].concat.apply([], listOfListOfCommits).slice(0, 5);
      this.setState({ commits });
    } catch (err) {
      this.setState({ githubApiError: true });
    }
  }

  render() {
    const { repos, commits, githubApiError } = this.state;
    if (githubApiError) {
      return null;
    }

    return (
      <RecentActivitySection>
        <Divider />
        <RecentAcitivtyContainer>
          <div className="Repos">
            <h2>Most starred repos</h2>
            {repos.map(repo => (
              <ShowcareRepo key={repo.id} repo={repo} />
            ))}
          </div>

          <div className="Commits">
            <h2>Most recent commits</h2>
            {commits.map(commit => (
              <CommitMessage key={commit.sha} commit={commit} />
            ))}
          </div>
        </RecentAcitivtyContainer>
      </RecentActivitySection>
    );
  }
}

const RecentActivitySection = styled.section`
  text-align: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
`;

const RecentAcitivtyContainer = styled.div`
  display: flex;

  > div {
    display: flex;
    justify-content: center;
    width: 50%;
    font-weight: 800;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;

    > div {
      width: 100% !important;
    }

    .Commits {
      margin-top: 30px;
    }
  }
`;

export default RecentActivity;
