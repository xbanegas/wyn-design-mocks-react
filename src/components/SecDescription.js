import React, { Component } from 'react';
import '../css/Section.css';

class SecDescription extends Component {
    constructor(props){
        super(props);
        this.section = props.secData;
    }
    render(){
        const hasDescription = this.section.description || false;
        if (hasDescription) {
          return ( <div className="description">{hasDescription}</div> );
        } else { 
          return (null);
        }
    };
}

export default SecDescription;