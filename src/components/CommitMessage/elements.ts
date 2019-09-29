import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

export const CommitCard = styled(Card)`
  padding: 15px !important;
  max-width: 500px !important;
  width: 100% !important;

  @media screen and (max-width: 500px) {
    margin: 0px !important;
  }
`;
