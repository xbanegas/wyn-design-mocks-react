import React, { Component } from 'react';
import Section from './Section';
import '../css/Main.css';
import '../css/Row.css'

class Row extends Component {
	addSections(){
    // console.log(this.props);
    let these_sections = [];
    this.props.sections.forEach(section => {
      console.log(section);
      these_sections.push(<Section box={`box-${section.boxNum}`} category={section.category} title={section.title} 
      description={section.description} price={section.price}/>);
    });
    return these_sections;
	}

	render() {
		return (
			<div id={this.props.rowNum}>
        {this.addSections()}
			</div>
		);
	}
}

export default Row;
