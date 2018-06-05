import React, { Component } from 'react';
import SecHeader from './SecHeader';
import SecDescription from './SecDescription';
import SecFooter from './SecFooter';
import '../css/Section.css';


class Section extends Component {
  constructor(props){
    super(props);
    this.section = props.secData;
    // console.log(this.section);
  }

  render() {
    let class_name = `box-${this.section.boxNum}` + ' ' + this.section.align;
    return (
      <section className={class_name}>
        <SecHeader secData={this.section} />
        <SecDescription secData={this.section} />
        <SecFooter secData={this.section} />
      </section>
    );
  }
}

export default Section;
