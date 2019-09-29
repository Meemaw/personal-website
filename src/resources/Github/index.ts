import { GithubEventDTO, GithubRepositoryDTO } from 'meta/types/github';
import api from 'lib/api';
import { ResourceFetch } from 'meta/types/Api';

const { GET } = api;

interface GithubResource {
  getRepos: ResourceFetch<GithubRepositoryDTO[], { user: string; page?: number }>;
  getEvents: ResourceFetch<GithubEventDTO[], { user: string }>;
}

const GithubResource: GithubResource = {
  getRepos: GET('https://api.github.com/users/:user/repos', { authenticated: false }),
  getEvents: GET('https://api.github.com/users/:user/events', { authenticated: false }),
};

export default GithubResource;
