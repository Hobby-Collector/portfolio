import React, { Component } from "react";
import './TextContentArea.css';

class TextContentArea extends Component {
    render(){
        return(
            <div className = 'TextContentArea'>
                <h1>{this.props.Active.title}</h1>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <h2>{this.props.Active.description}</h2>
            </div>
        )
    }
}

export default TextContentArea;