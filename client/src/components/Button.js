import React, { Component } from 'react';
import { Button } from 'antd';

class Buttons extends React.Component{
    render(){
    return(
        <div >

                    <img id="logo" src={require('../assets/images/psLogo.png')} />
                    <br></br>
                    <span id="slogan">JUMP OUT OF THE TUTORIAL HOLE AND <br></br> JUMP INTO PROJECT SEED!</span>
                    <br></br>
                   
                    <Button id="loginBtn"> LOG IN WITH GITHUB</Button>
        </div>
        )
    }

    
}

export default Buttons;
  