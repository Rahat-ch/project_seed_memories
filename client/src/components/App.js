import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import "../index.css";
import "../App.css";

import Buttons from "./Button";
import Cards from "./Card";

class App extends React.Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="splashLeft" span={16}>
            <span id="callToAction">
              <h1>
                Jump right in to join 1’s of new developers as well as
                experienced developers working on projects!
              </h1>
            </span>
            <br />
            <div id="cardSpace">
              <Col span={7} offset={1}>
                <Cards />
              </Col>
              <Col span={7} offset={1}>
                <Cards />
              </Col>
              <Col span={7} offset={1}>
                <Cards />
              </Col>
            </div>
          </Col>

          <Col className="splashRight" span={8}>
            <div id="buttons">
              <Buttons />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
