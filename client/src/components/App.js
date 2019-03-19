import React, { Component } from "react";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import "../index.css";
import "../App.css";

import Buttons from "./Button";
import Cards from "./Card";
import { runInNewContext } from "vm";

class App extends React.Component {
  render() {
    return (
      <div>
          <Col className="splashLeft" span={16}>
            <span id="callToAction">
            <Row>
              <h1>Get out of the tutorial hole and start GROWING your skills in Project Seed!</h1>
              <h1>Project Seed is an online community for new developers who want to start a team, 
              have an exciting project idea or want to work on an existing application.</h1>
              </Row>
            </span>
            <br />
            <div id="cardSpace">
            <Row type="flex" justify="space-around" align="middle">
              <Col span={7} offset={1}>
                <Cards />
              </Col>
              <Col span={7} offset={1}>
                <Cards />
              </Col>
              <Col span={7} offset={1}>
                <Cards />
              </Col>
            </Row>     
            <br />
            <Row type="flex" justify="space-around" align="middle">
              <Col span={7} offset={1}>
                <Cards />
              </Col>
              <Col span={7} offset={1}>
                <Cards />
              </Col>
              <Col span={7} offset={1}>
                <Cards />
              </Col>
            </Row>
            <br />
            <Row type="flex" justify="space-around" align="middle">
              <Col span={7} offset={1} value={50}>
                <Cards />
              </Col>
              <Col span={7} offset={1} value={50}>
                <Cards />
              </Col>
              <Col span={7} offset={1} value={50}>
                <Cards />
              </Col>
            </Row>
            </div>
          </Col>
          {/* End of splash left */}
          
          <Col className="splashRight" span={8}>
            <div id="buttons">
              <Buttons />
            </div>
          </Col>
          {/* End of splash right */}
      </div>
    );
  }
}

export default App;
