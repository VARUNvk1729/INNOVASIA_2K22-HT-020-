import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Labadmin from './components/Labadmin';
import Patient from './components/Patient';
import Hospital from './components/Hospital';

class App extends Component {
render() {
	return (
    <div>
	<Router>
		<div className="App">
			<ul className="App-header">
			<li>
				<Link to="/Hospital">hospital</Link>
			</li>
      <hr></hr>
			<li>
				<Link to="/Labadmin">labadmin</Link>
			</li>
			<li>
				<Link to="/Patient">patient</Link>
			</li>
			</ul>
		<Routes>
				<Route exact path='/Hospital' element={<Hospital/>}></Route>
				<Route exact path='/Labadmin' element={<Labadmin/>}></Route>
				<Route exact path='/Patient' element={< Patient />}></Route>
		</Routes>
		</div>
	</Router>
  </div>
  // <h1>acba</h1>
);
}
}

export default App;
