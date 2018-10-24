import { differenceInDays, format } from 'date-fns';
import * as React from 'react';
import { Image, List } from 'semantic-ui-react';
import styled from 'styled-components';

type Props = {
  company: string;
  title: string;
  logo: string;
  website: string;
  city?: string;
  from: Date;
  to?: Date;
  responsibilites?: string[];
};

const ExperienceCard = ({
  from,
  to,
  company,
  title,
  logo,
  website,
  responsibilites = [],
  city = 'Ljubljana, Slovenia',
}: Props) => {
  const fromDateString = format(from, 'MMM YYYY');
  const toDateString = to ? format(to, 'MMM YYYY') : 'Present';
  return (
    <ExperienceDetailsStyle>
      <a href={website} target="blank_">
        <Image src={logo} style={{ height: '70px', width: 'auto' }} />
      </a>
      <div style={{ padding: '0 15px' }}>
        <div style={{ fontWeight: 600 }}>{title}</div>

        <a href={website} target="blank_">
          <div className="Company">{company}</div>
        </a>
        <div className="Duration Detail">
          <span>{`${fromDateString} - ${toDateString}`}</span>
          <span className="Loyalty">{getDifference(from, to)}</span>
        </div>
        <div className="Detail">{city}</div>

        {responsibilites.length > 0 ? (
          <List bulleted>
            {responsibilites.map(responsibility => (
              <List.Item key={responsibility} content={responsibility} />
            ))}
          </List>
        ) : null}
      </div>
    </ExperienceDetailsStyle>
  );
};

const getDifference = (from: Date, to?: Date) => {
  const diff = differenceInDays(to || new Date(), from);
  const years = Math.floor(diff / 365);
  const months = Math.ceil(diff / 31);
  if (years >= 1) {
    return `${years} yr ${months - years * 12} mos`;
  } else {
    return `${months + 1} mos`;
  }
};

const ExperienceDetailsStyle = styled.div`
  display: flex;
  padding: 15px 3px;

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

  .list > .item {
    font-size: 0.75rem !important;
    opacity: 0.65 !important;
  }

  .Duration > .Loyalty::before {
    content: '\00B7';
    margin: 0 3px;
  }
`;

export default ExperienceCard;
