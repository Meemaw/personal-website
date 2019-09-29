import { GithubEventDTO, GithubEvent, CommitDTO, Commit } from 'meta/types/github';

function cleanEventRepoURL(url: string): string {
  return url.replace('api.', '').replace('/repos', '');
}

function cleanCommitURL(url: string): string {
  return cleanEventRepoURL(url).replace('commits', 'commit');
}

export const fromEventDTO = (event: GithubEventDTO): GithubEvent => {
  return {
    ...event,
    createdAt: new Date(event.created_at),
    repo: { ...event.repo, url: cleanEventRepoURL(event.repo.url) },
  };
};

export const fromCommitDTO = (commit: CommitDTO): Commit => {
  return {
    ...commit,
    url: cleanCommitURL(commit.url),
    actor: commit.actor,
    createdAt: new Date(commit.created_at),
  };
};
