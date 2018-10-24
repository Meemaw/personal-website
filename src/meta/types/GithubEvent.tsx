type BaseGithubEvent = {
  id: number;
  type: string;
  repo: { id: number; name: string; url: string };
  payload: Payload;
  actor: Actor;
};

export type Actor = {
  avatar_url: string;
  display_login: string;
  login: string;
};

export interface GithubServerEvent extends BaseGithubEvent {
  created_at: string;
}

export interface GithubEvent extends BaseGithubEvent {
  created_at: Date;
}

type Payload = {
  commits: Commit[];
};

export type Commit = {
  sha: string;
  author: { email: string; name: string };
  actor: Actor;
  repo: { id: number; name: string; url: string };
  message: string;
  url: string;
  created_at: Date;
};

export const toGithubEvent = (event: GithubServerEvent) => {
  return { ...event, created_at: new Date(event.created_at) };
};
