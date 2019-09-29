import styled from 'styled-components';
import { Card } from 'semantic-ui-react';

export const ShowcareRepoCard = styled(Card)`
  padding: 15px !important;
  max-width: 500px !important;
  width: 100% !important;

  .RepoName {
    margin: 26px;
  }

  .Actions {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    margin: 0px !important;

    .Actions {
      flex-direction: column;
    }

    button {
      width: 150px;
    }

    .Actions > div {
      width: 100%;
      justify-content: center;
    }
  }
`;
