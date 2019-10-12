import styled from 'styled-components';

export const ExperienceCardStyle = styled.div`
  display: flex !important;
  padding: 15px 3px !important;

  .Company {
    font-size: 0.9rem;
    font-weight: 500;
  }

  .Detail {
    opacity: 0.7;
    font-size: 0.7rem;
  }

  .Duration {
    margin-top: 6px;
  }

  .item {
    font-size: 0.75rem;
    opacity: 0.65;
  }
`;

export const Loyalty = styled.span`
  margin: 0 3px;

  :before {
    content: "\\00b7";
  }
`;
