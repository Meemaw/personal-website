type BaseEventDTO = {
  id: number;
  type: string;
  payload: Payload;
  actor: Actor;
  repo: { id: number; name: string; url: string };
};

type BaseCommitDTO = {
  sha: string;
  author: { email: string; name: string };
  actor: Actor;
  message: string;
  url: string;
};

export type Actor = {
  avatar_url: string;
  display_login: string;
  login: string;
};

export interface GithubEventDTO extends BaseEventDTO {
  created_at: string;
}

export interface GithubEvent extends BaseEventDTO {
  createdAt: Date;
}

type Payload = {
  commits: CommitDTO[];
};

export type CommitDTO = BaseCommitDTO & {
  created_at: Date;
};

export type Commit = BaseCommitDTO & {
  createdAt: Date;
};

export type GithubRepositoryDTO = {
  id: number;
  private: boolean;
  name: string;
  stargazers_count: number;
  owner: Actor;
  watchers: number;
  forks: number;
  description?: string;
  full_name: string;
  html_url: string;
};

export type CommitWithEvent = Commit & GithubEvent;
