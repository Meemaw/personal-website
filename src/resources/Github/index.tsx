import api from '../../lib/api';
import { ResourceFetch } from '../../meta/types/Api';
import { GithubServerEvent } from '../../meta/types/GithubEvent';
import { GithubRepository } from '../../meta/types/GithubRepository';

const { GET } = api;

interface GithubResource {
  getRepos: ResourceFetch<GithubRepository[], { user: string; page?: number }>;
  getEvents: ResourceFetch<GithubServerEvent[], { user: string }>;
}

const GithubResource: GithubResource = {
  getRepos: GET('https://api.github.com/users/:user/repos', { authenticated: false }),
  getEvents: GET('https://api.github.com/users/:user/events', { authenticated: false }),
};

export default GithubResource;
