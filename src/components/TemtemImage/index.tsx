import { TemTemApiTem } from "@maael/temtem-types";
import React from "react";
import './/styles.css';

type Props = {
  temtem?: TemTemApiTem;
};

const TemtemImage: React.FC<Props> = ({ temtem }) => {
  const api = "https://temtem-api.mael.tech";
  const { icon, wikiPortraitUrlLarge } = temtem!;
  const imageUrl = icon ? api + icon : wikiPortraitUrlLarge;

  return (
    <img width="250" height="250" className="temtem-card-image" alt={temtem?.name} src={imageUrl} />
  )
}

export default TemtemImage;