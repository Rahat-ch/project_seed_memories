import React, { Component } from 'react';
import { Card, Icon, Avatar } from 'antd';
import "../../node_modules/hover.css/css/hover.css"
const { Meta } = Card;

class Cards extends React.Component{
render(){
    return(
  <Card
    className = "hvr-shadow"  
    style={{ width: 300 }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description" 
    />
  </Card>

        )
}


}

export default Cards;