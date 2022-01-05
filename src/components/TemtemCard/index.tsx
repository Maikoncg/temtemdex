import { TemTemApiTem } from '@maael/temtem-types';
import React from 'react';
import TemtemImage from "../TemtemImage";
import './/styles.css';

type Props = {
  temtem: TemTemApiTem;
};

const TemtemCard: React.FC<Props> = ({ temtem }) => {
  console.log(temtem);
  return (
    <div className="temtem-card" key={temtem?.number}>
      <span className="temtemPortrait background">
        <TemtemImage temtem={temtem} />
      </span>
    </div>
  )
} 

export default TemtemCard;