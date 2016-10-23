import React from 'react';
import {render} from 'react-dom';

import GridSima from './GridSima.jsx';


class App extends React.Component {

	render(){
		return (

			<div>
				<h3>Sono l'app di Simone</h3>
				<hr/>
				<GridSima />
			</div>

		);
	}

}

render(<App/>, document.getElementById('app'));