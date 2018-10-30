import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";

const CandyThumbnail = ({ image_small_url, generic_name_fr }) => {
  return (
    <div>
      <Card>
          
        <CardImg src={image_small_url} alt="Card image cap" />
        <CardBody>
            <CardTitle>{generic_name_fr}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default CandyThumbnail;
