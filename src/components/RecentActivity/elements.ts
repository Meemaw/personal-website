import styled from 'styled-components';

export const RecentActivitySection = styled.section`
  text-align: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
`;

export const RecentAcitivtyContainer = styled.div`
  display: flex;

  > div {
    display: flex;
    justify-content: center;
    width: 50%;
    font-weight: 800;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;

    > div {
      width: 100% !important;
    }

    .Commits {
      margin-top: 30px;
    }
  }
`;
