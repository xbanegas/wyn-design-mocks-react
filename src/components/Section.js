import React, { Component } from 'react';
import SecHeader from './SecHeader';
import '../css/Section.css';
import SecFooter from './SecFooter';

/**
 * @todo move secFooter and secHeader to their own components 
 */

class Section extends Component {
  constructor(props){
    super(props);
    this.section = props.secData;
    console.log(this.section);
  }



  Description() {
    const hasDescription = this.section.description || false;
    if (hasDescription) {
      return ( <div className="description">{hasDescription}</div> );
    } else { 
      return (null);
    }
  }

  render() {
    return (
      <section className={`box-${this.section.boxNum}` + ' ' + this.section.align}>
        <SecHeader secData={this.section} />
        {this.Description()}
        <SecFooter secData={this.section} />
      </section>
    );
  }
}

export default Section;
