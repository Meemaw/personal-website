import orderBy from 'lodash.orderby';
import flatten from 'lodash.flatten';
import React, { useState, useEffect, useCallback } from 'react';
import { Divider } from 'semantic-ui-react';
import { GithubResource } from 'resources';
import CommitMessage from 'components/CommitMessage';
import ShowcareRepo from 'components/ShowcaseRepo';

import { RecentActivitySection, RecentAcitivtyContainer } from './elements';
import { fetchGithubRepos } from './api';
import { GithubActivity } from './types';
import { fromEventDTO, fromCommitDTO } from './utils';

type Props = {
  user?: string;
  numRepos?: number;
};

const RecentActivity = ({ user = 'Meemaw', numRepos = 3 }: Props) => {
  const [recentActivity, setRecentActivity] = useState<GithubActivity>({ repos: [], commits: [] });
  const [apiError, setApiError] = useState<Error>();

  const fetchRecentActivity = useCallback(async () => {
    try {
      const repos = await fetchGithubRepos(user);
      const topRepositories = orderBy(repos, ['stargazers_count'], 'desc').slice(0, numRepos);

      const serverEvents = await GithubResource.getEvents({ user });
      const commitsForServerEvents = serverEvents
        .map(fromEventDTO)
        .filter(event => event.type === 'PushEvent')
        .map(event =>
          event.payload.commits.map(fromCommitDTO).map(commit => ({ ...commit, ...event })),
        );

      const commits = flatten(commitsForServerEvents).slice(0, 5);
      setRecentActivity({ commits, repos: topRepositories });
    } catch (err) {
      console.error(err);
      setApiError(err);
      setTimeout(fetchRecentActivity, 15000);
    }
  }, [user, numRepos]);

  useEffect(() => {
    fetchRecentActivity();
  }, [fetchRecentActivity]);

  if (apiError) {
    return null;
  }

  const { repos, commits } = recentActivity;

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
};

export default RecentActivity;
