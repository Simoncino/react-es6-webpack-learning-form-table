import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import GridSima from './GridSima.jsx';


class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			axiosData : {"nome":"nessuno"},
			axiosDataMongo : {"mongo":"niente"}
		}
	}

	loadData(){
		var _this = this;
		axios.get('/heroesArray')
		.then(function(response){
			_this.setState({axiosData:response.data});
		});  
	}

	loadDataMongo(){
		var _this = this;
		axios.get('/heroesMongoTest')
		.then(function(response){
			console.log('loadDataMongo() response', response);
			_this.setState({axiosDataMongo:response.data});
		});  
	}

	render(){
		var axiosData = this.state.axiosData;
		var axiosDataMongo = this.state.axiosDataMongo;
	
		return (

			<div className="text-center">
				<h3>Sono l'app di Simone</h3>
				<hr/>
				<GridSima />
				<hr/>
				<button className="button round success small" onClick={this.loadData.bind(this)}>Load</button>
				<pre>{JSON.stringify(axiosData)}</pre>
				<hr/>
				<button className="button round success small" onClick={this.loadDataMongo.bind(this)}>Load</button>
				<pre>{JSON.stringify(axiosDataMongo)}</pre>
			</div>

			);
	}

}

render(<App/>, document.getElementById('app'));