import React, { Component } from 'react';
import '../css/Section.css';

class SecFooter extends Component {
    constructor(props){
        super(props);
        this.section = props.secData;
        this.category = this.section.category || '';
        this.state = {likes: this.section.likes}
        this.handleLike = this.handleLike.bind(this);
    }

    handleLike(e){
        e.preventDefault();
        this.setState(prevState => ({
          likes: prevState.likes += 1
        }));
    }

    render() {
        const category = this.category || '';
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
    };
}

export default SecFooter;
