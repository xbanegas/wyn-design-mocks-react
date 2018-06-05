import React, { Component } from 'react';
import Section from './Section';
import '../css/Main.css';
import '../css/Row.css'

class Row extends Component {
  constructor(props){
    super(props);
    this.addSections(props);
  }
	addSections(props){
    if (props){
    let these_props = props.sections.slice(1);
    console.log(these_props);
    let these_sections = [];
    these_props.forEach(section => {
      // console.log(section);
      these_sections.push(<Section box={`box-${section.boxNum}`} category={section.category} title={section.title} 
      description={section.description} price={section.price} hasDescription={section.description} secAlign={section.align}
      quote={section.quote} author={section.author}/>);
    });
    this.sections = these_sections;
  }
	}

	render() {
    let rowNum = Number(this.props.rowNum.slice(-1));

    if (rowNum === 3){
      
      return(
        <div id={this.props.rowNum}>
          <div className="col-1">
            {this.sections[0]}
            <div className="sub-row">
              {this.sections.slice(1,3)}
            </div>
          </div>
          <div className="col-2">
            {this.sections[3]}
          </div>
        </div>
      );
    } else {
		  return (
			  <div id={this.props.rowNum}>
          {this.sections}
			  </div>
      );
    }
	}
}

export default Row;
