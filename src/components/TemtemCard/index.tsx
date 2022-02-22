import { TemTemApiTem } from '@maael/temtem-types';
import React from 'react';
import { Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import TemtemImage from "../TemtemImage";
import './/styles.css';

type Props = {
  temtem: TemTemApiTem;
};

const TemtemCard: React.FC<Props> = ({ temtem }) => {
  return (
    <Card className="temtem-card" key={temtem?.number}>
      <Card.Header className="text-center temtem-card-header">{temtem.name}</Card.Header>
      <span className="temtem-portrait temtem-portrait-background">
        <TemtemImage temtem={temtem} />
      </span>
      <Card.Body className="text-center">
        {temtem.types.map((type) => (
          <OverlayTrigger 
            placement="bottom" 
            overlay={
              <Tooltip>
                <span>{type}</span>
              </Tooltip>
            }
          >
            <img key={type} width="50" height="50"alt={type} src={require(`../../assets/images/${type}-type-icon.png`)} />
          </OverlayTrigger>
        ))}
      </Card.Body>
    </Card>
  )
} 

export default TemtemCard;