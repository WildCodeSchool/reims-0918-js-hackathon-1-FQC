import React from "react";
import "./inventaire.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";

const Inventaire = ({candys}) => {
  return (
    <div>
      <h2>Mes Bonbons</h2>
     { console.log("candys", candys)}
      {candys.map(candy => (
        <Card>
        <CardImg src={candy.image} alt="Card image cap" />
        <CardBody>
            <CardTitle>{candy.name}</CardTitle>
        </CardBody>
      </Card>
      ))}
      
    </div>
  );
};

export default Inventaire;
