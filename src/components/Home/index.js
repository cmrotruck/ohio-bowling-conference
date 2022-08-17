import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import HeroImage from "../assets/Hero/HeroImage.jpg";

export default function Home() {
  return (
    <Container>
      <Row>
        <img
          className="hero"
          src={require("../../assets/Home/HeroImage.jpg")}
          alt="Ohio Bowling Conference Logo"
        />
      </Row>
      <Row className="bluerow">
        <Col sm={4} md={6}>
          <div className="message">
            <p>
              The <span className="bold">Ohio Bowling Conference</span> is a
              collegiate bowling conference that was created to encourage Ohio
              teams to join together. With slight exception, tournaments are
              centrally located in Columbus, Ohio. All OBC events are one-day,
              Saturday events.{" "}
            </p>
            <p>
              {" "}
              Doug Smith, the founder of the OBC, and head coach of Muskingum
              University wanted to create an opportunity for schools that do not
              have extensive budgets, the ability to offer their teams a quality
              season and wide range of competition without the high costs.
            </p>
          </div>
        </Col>
        <Col sm={8} md={6}>
          <img
            className="home"
            src={require("../../assets/Home/HomeImage.jpg")}
            alt="Ohio Bowling Conference Logo with all teams"
          />
        </Col>
      </Row>
    </Container>
  );
}
