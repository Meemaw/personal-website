import * as React from 'react';
import styled from 'styled-components';

type Props = {
  message: string;
  repoName: string;
  commitUrl: string;
  repoUrl: string;
};

const CommitTitle = ({ message, repoName, commitUrl, repoUrl }: Props) => {
  return (
    <TitleStyle>
      <span>Commited </span>
      <a href={commitUrl} target="_blank">
        "{message}"
      </a>
      <span> to Github repository </span>
      <a href={repoUrl} target="_blank">
        {repoName}
      </a>
    </TitleStyle>
  );
};

const TitleStyle = styled.div`
  text-align: left;
  color: #444d56;
  font-weight: 600;
  font-size: 0.85rem;

  span {
    font-weight: 300;
  }
`;

export default CommitTitle;
