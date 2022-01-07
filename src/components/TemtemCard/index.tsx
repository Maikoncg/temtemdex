import { TemTemApiTem } from '@maael/temtem-types';
import React from 'react';
import { Card } from 'react-bootstrap';
import TemtemImage from "../TemtemImage";
import './/styles.css';

type Props = {
  temtem: TemTemApiTem;
};

const TemtemCard: React.FC<Props> = ({ temtem }) => {
  console.log(temtem);
  return (
    <Card className="temtem-card" key={temtem?.number}>
      <Card.Header className="text-center temtem-card-header">{temtem.name}</Card.Header>
      <span className="temtem-portrait temtem-portrait-background">
        <TemtemImage temtem={temtem} />
      </span>
    </Card>
  )
} 

export default TemtemCard;