import React, { Component } from 'react';
import '../css/Section.css';

/**
 * @todo move secFooter and secHeader to their own components 
 * @todo implement likes from secdata.json
 */

class Section extends Component {
  constructor(props){
    super(props);
    this.state = {likes: 4334}
    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(e){
    e.preventDefault();
    this.setState(prevState => ({
      likes: prevState.likes += 1
    }));
  }

  secFooter(props) {
    const category = props.category || '';
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
          {props.author}
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

  Description(props) {
    const hasDescription = props.hasDescription || false;
    if (hasDescription) {
      return ( <div className="description">{hasDescription}</div> );
    } else { 
      return (null);
    }
  }

  secHeader(props) {
    const category = props.category || '';
    // console.log(category);
    if ((!(category === 'item')) && (!(category === 'quote'))) {
      return (
        <div className="sec-head">
          <h2 className="title">{props.title}</h2>
          <h4 className="category">{props.category}</h4>
        </div>
      );
    } else if (category === 'quote') {
      return(
        <div className="quote">
          {props.quote}
        </div>
      );
    } else {
      return (
        <div className="sec-head">
          <h2 className="title">{props.title}</h2>
          <button className="btn-price">{props.price}</button>
        </div>
      );
    }
  }

  render() {
    return (
      <section className={this.props.box + ' ' + this.props.secAlign}>
        {this.secHeader(this.props)}
        {this.Description(this.props)}
        {this.secFooter(this.props)}
      </section>
    );
  }
}

export default Section;
