import * as React from 'react';
import { Card, Header, Icon, List, SemanticICONS } from 'semantic-ui-react';
import styled from 'styled-components';

type Props = {
  title: string;
  description: string;
  languages: string[];
  icon: SemanticICONS;
  technologies?: string[];
  languagesHeader?: string;
};

const TechnologyCard = ({
  title,
  description,
  languages,
  technologies,
  icon,
  languagesHeader = 'Languages I enjoy:',
}: Props) => {
  return (
    <CardStyle>
      <div className="CardContent">
        <Icon name={icon} style={{ fontSize: '3em' }} color="purple" />
        <h3>{title}</h3>

        <p>{description}</p>

        <Header as="h4" color="purple" content={languagesHeader} />
        <List>
          {languages.map(language => (
            <List.Item key={language}>{language}</List.Item>
          ))}
        </List>

        {technologies && (
          <React.Fragment>
            <Header as="h4" color="purple" content="Technologies I've used:" />
            <List>
              {technologies.map(technology => (
                <List.Item key={technology}>{technology}</List.Item>
              ))}
            </List>
          </React.Fragment>
        )}
      </div>
    </CardStyle>
  );
};

const CardStyle = styled(Card)`
  padding: 15px;

  .CardContent {
    text-align: center;
    padding: 10px;
  }
`;

export default TechnologyCard;
