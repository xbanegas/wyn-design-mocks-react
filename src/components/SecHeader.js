import React, { Component } from 'react';
import '../css/Section.css';

class SecHeader extends Component {
    constructor(props){
        super(props);
        this.section = props.secData;
        this.category = this.section.category || '';
    }

    render() {
        const category = this.category;
        if ((!(category === 'item')) && (!(category === 'quote'))) {
            return (
                <div className="sec-head">
                    <h2 className="title">{this.section.title}</h2>
                    <h4 className="category">{this.section.category}</h4>
                </div>
            );
        } else if (category === 'quote') {
            return(
                <div className="quote">
                    {this.section.quote}
                </div>
            );
        } else {
            return (
                <div className="sec-head">
                    <h2 className="title">{this.section.title}</h2>
                    <button className="btn-price">{this.section.price}</button>
                </div>
            );
        }
    }
}

export default SecHeader;