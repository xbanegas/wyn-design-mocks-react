import React, { Component } from 'react';
import '../css/Section.css';

class Section extends Component {

	render() {
		function Description(props) {
			const hasDescription = props.hasDescription || false;
			if (hasDescription) {
				return ( <div class="description">{hasDescription}</div> );
			} else { 
				return (null);
			}
		}

		function secFooter(props) {
			const category = props.category || '';
			if ((!(category === 'item')) && (!(category == 'quote'))) {
				return (
					<div className="sec-foot to-bottom">
						<a href="#" class="btn-like"><i class="fa fa-heart"></i>&nbsp;&nbsp;4334</a>
						<button class="btn-read">Read Post > </button>
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
						<button class="btn-read">Buy Now > </button> 
					</div>
				);
			}
		}

		function secHeader(props) {
      const category = props.category || '';
      console.log(category);
			if ((!(category === 'item')) && (!(category == 'quote'))) {
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

		return (
			<section className={this.props.box + ' ' + this.props.secAlign}>
				{secHeader(this.props)}
				{Description(this.props)}
				{secFooter(this.props)}
			</section>
		);
	}
}

export default Section;
