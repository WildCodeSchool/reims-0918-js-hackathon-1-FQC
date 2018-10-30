import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";

const CandyThumbnail = ({ selected_images, product_name }) => {
  return (
    <div>
      <Card>
        <CardImg src={selected_images.front.small.fr} alt="Card image cap" />
        <CardBody>
            <CardTitle>{product_name}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default CandyThumbnail;
