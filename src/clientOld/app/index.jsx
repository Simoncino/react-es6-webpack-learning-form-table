import React from 'react';
import {render} from 'react-dom';

import GridSima from './GridSima.jsx';
import Avatar from './Avatar.jsx';
import TodoList from './TodoList.jsx';


class App extends React.Component {

	render(){
		return (

			<div>
				<h3>Sono l'app di Simone</h3>
				<hr/>
				<GridSima />
				<hr/>
				<Avatar pagename="Engineering" />
				<hr/>
				<TodoList />
			</div>

		);
	}

}



render(<App/>, document.getElementById('app'));