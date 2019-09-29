import { GithubRepositoryDTO, CommitWithEvent } from 'meta/types/github';

export type GithubActivity = {
  repos: GithubRepositoryDTO[];
  commits: CommitWithEvent[];
};
