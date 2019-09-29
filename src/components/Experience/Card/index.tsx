import { differenceInDays, format } from 'date-fns';
import React from 'react';
import { Image, List } from 'semantic-ui-react';

import { ExperienceCardStyle, Loyalty } from './elements';

type Props = {
  company: string;
  title: string;
  website: string;
  city?: string;
  from: Date;
  to?: Date;
  responsibilites?: string[];
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

const ExperienceCard = ({
  from,
  to,
  company,
  title,
  website,
  responsibilites = [],
  city = 'Ljubljana, Slovenia',
}: Props) => {
  const fromDateString = format(from, 'MMM yyyy');
  const toDateString = to ? format(to, 'MMM yyyy') : 'Present';

  return (
    <ExperienceCardStyle>
      <a href={website} target="blank_">
        <Image
          src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${website}`}
          style={{ height: '20px', width: 'auto' }}
        />
      </a>
      <div style={{ padding: '0 15px' }}>
        <div style={{ fontWeight: 600 }}>{title}</div>

        <a href={website} target="blank_">
          <div className="Company">{company}</div>
        </a>
        <div className="Duration Detail">
          <span>{`${fromDateString} - ${toDateString}`}</span>
          <Loyalty>{getDifference(from, to)}</Loyalty>
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
    </ExperienceCardStyle>
  );
};

export default ExperienceCard;
