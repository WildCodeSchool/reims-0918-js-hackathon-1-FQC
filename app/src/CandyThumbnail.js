import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";

const CandyThumbnail = ({ candy, generic_name_fr }) => {
  return (
    <div>
      <Card>
          
        <CardImg src={candy} alt="Card image cap" />
        <CardBody>
            <CardTitle>{generic_name_fr}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default CandyThumbnail;
