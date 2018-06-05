import React, { Component } from 'react';
import '../css/Main.css';

class Nav extends Component {
	render() {
    return (
		<nav>
			<div><a id="menu" className="to-bottom-left" href="#"><i className="fa fa-bars"></i></a></div>
			<div><h1 id="page-title">DIGEST</h1></div>
			<div><a id="search" className="to-bottom-right" href=""><i className="fa fa-search"></i></a></div>
		</nav>
	);
  }
}

export default Nav;
