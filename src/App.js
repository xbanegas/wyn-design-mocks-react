import React, { Component } from 'react';
import Nav from './components/Nav';
import Row from './components/Row';
import './css/App.css';
import secData from './secdata.json';

class App extends Component {
  constructor(props){
    super(props);
    this.these_rows = this.formatRows(secData);
  }

  formatRows(secData){
    let rows = [];
		secData.forEach(function(section){
			if (!rows[section.row]) { rows[section.row] = [] }
			if (!rows[section.row][section.boxNum]) { rows[section.row][section.boxNum] = {}; }
			rows[section.row][section.boxNum] = section;
		});
		let these_rows = [];
		rows.forEach(function(row, index){
			let rowNumber = index;
			let this_row = <Row rowNum={`row-${rowNumber}`} sections={rows[rowNumber]} />;
			these_rows.push(this_row);
    });
    
    // console.log(these_rows);
    // console.log(rows);
    return these_rows;
  }

  render() {
    return (
		<div className="App">
      <Nav />
      {this.these_rows}
    </div>
    );
  }
}

export default App;
