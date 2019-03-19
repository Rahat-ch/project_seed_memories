import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import '../index.css';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Row>
      <Col span={16}>Project side</Col>
      <Col span={8}>Login in side</Col>
        </Row>
        </div>
    );
  
  }
}

export default App;