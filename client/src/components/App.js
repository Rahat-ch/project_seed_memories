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
      <Col span={12}><h1>col-12</h1></Col>
      <Col span={12}>col-12</Col>
        </Row>
        </div>
    );
  
  }
}

export default App;