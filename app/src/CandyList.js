import React from "react";
import { CardColumns } from "reactstrap";
import CandyThumbnail from "./CandyThumbnail";

const CandyList = ({ list }) => {
  return (
    <div>
      <CardColumns> 
        {list.map(candy => (
          <CandyThumbnail candy={candy.selected_images.front.display.fr} />
        ))}
      </CardColumns>
    </div>
  );
};

export default CandyList;
