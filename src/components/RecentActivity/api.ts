import { GithubRepositoryDTO } from 'meta/types/github';
import { GithubResource } from 'resources';

export const fetchGithubRepos = async (
  user: string,
  page = 1,
  acc: GithubRepositoryDTO[] = [],
): Promise<GithubRepositoryDTO[]> => {
  const response = await GithubResource.getRepos({ user: 'Meemaw', page });
  const repos = [...response, ...acc];
  return response.length < 30 ? repos : fetchGithubRepos(user, page + 1, repos);
};
