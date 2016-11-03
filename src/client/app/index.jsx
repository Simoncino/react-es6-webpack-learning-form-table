import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import GridSima from './GridSima.jsx';


class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			axiosData : {"nome":"nessuno"}
		}
	}

	loadData(){
		var _this = this;
		axios.get('/heroesArray')
		.then(function(response){
			_this.setState({axiosData:response.data});
		});  
	}

	render(){
		var axiosData = this.state.axiosData;
	
		return (

			<div className="text-center">
				<h3>Sono l'app di Simone</h3>
				<hr/>
				<GridSima />
				<hr/>
				<button className="button round success small" onClick={this.loadData.bind(this)}>Load</button>
				<pre>{JSON.stringify(axiosData)}</pre>
				<hr/>
			</div>

			);
	}

}

render(<App/>, document.getElementById('app'));