import styled from 'styled-components';

export const TechnologiesSection = styled.section`
  display: flex;
  justify-content: center;
  margin: 0px;
  margin-top: -45px;

  > .card {
    margin: 0 40px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    padding: 0 20px;

    > .card {
      width: 100%;
      margin: 10px 0;
    }
  }
`;
