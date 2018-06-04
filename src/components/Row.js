import React, { Component } from 'react';
import Section from './Section';
import '../css/Main.css';
import '../css/Row.css'

class Row extends Component {
	addSections(){
		console.log(this.state);
	}
	componentDidMount(){
		this.addSections();
	}
	render() {
		return (
			<div id={this.props.rowNum}>
        <Section data={this.props.sections} />
			</div>
		);
	}
}

export default Row;
