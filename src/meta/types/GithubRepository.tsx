export type GithubRepository = {
  id: number;
  private: boolean;
  name: string;
  stargazers_count: number;
  owner: RepositoryOwner;
  watchers: number;
  forks: number;
  description?: string;
  full_name: string;
  html_url: string;
};

type RepositoryOwner = {
  login: string;
};
