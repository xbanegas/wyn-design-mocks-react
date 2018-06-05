import React, { Component } from 'react';
import SecHeader from './SecHeader';
import '../css/Section.css';

/**
 * @todo move secFooter and secHeader to their own components 
 */

class Section extends Component {
  constructor(props){
    super(props);
    this.section = props.secData;
    this.state = {likes: this.section.likes}
    this.handleLike = this.handleLike.bind(this);
    
    console.log(this.section);
  }

  handleLike(e){
    e.preventDefault();
    this.setState(prevState => ({
      likes: prevState.likes += 1
    }));
  }

  secFooter() {
    const category = this.section.category || '';
    if ((!(category === 'item')) && (!(category === 'quote'))) {
      return (
        <div className="sec-foot to-bottom">
          <a href="#" onClick={this.handleLike} className="btn-like"><i className="fa fa-heart"></i>&nbsp;&nbsp;{this.state.likes}</a>
          <button className="btn-read">Read Post > </button>
        </div>
      );
    } else if (category === 'quote') {
      return(
        <div className="author">
          {this.section.author}
        </div>
      );
    } else {
      return ( 
        <div className="sec-foot to-bottom">
          <button className="btn-read">Buy Now > </button> 
        </div>
      );
    }
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
        {this.secFooter()}
      </section>
    );
  }
}

export default Section;
