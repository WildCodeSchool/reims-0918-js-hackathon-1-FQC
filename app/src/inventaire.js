import React from "react";
import "./inventaire.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";

const Inventaire = ({ candys, index }) => {
  return (
    <div>
      <Scrollbars style={{ width: 300, height: 700 }}>
        <Container>
          <h2>Mes Bonbons</h2>
          <Row>
            {/* {console.log("candys", candys)} */}
            {candys.map((candy, index) => (
              <Col xs="6" key={index}>
                <Card style={{ width: 140, height: 250 }}>
                  <CardImg
                    style={{ width: 140, height: 180 }}
                    src={candy.image}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle>{candy.name}</CardTitle>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Scrollbars>
    </div>
  );
};

export default Inventaire;
