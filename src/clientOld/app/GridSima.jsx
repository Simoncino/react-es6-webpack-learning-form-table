import React from 'react';

import TableSima from './TableSima.jsx';

/*
- dati generali passati da questa classe []
- input text per la ricerca
- componente tabella che crea righe
*/

let stars = [
	{nome:'Hendrix', value:10}
	,{nome:'Tool', value:8}
	,{nome:'Rush', value:7}
	,{nome:'Yes', value:6}
	,{nome:'ELP', value:9}
	,{nome:'Banco del Mutuo Soccors', value:9}
	,{nome:'Gentle Giant', value:8}
];

let GridSima = React.createClass({
	getInitialState: function(){
		return {
			word: '',
			filteredArray: stars
		};
	},

	search :  function(event){
		/*console.log(event.target);*/
		/*this.state.word = event.target.value;*/
		this.setState({word: event.target.word});
		let word = event.target.value;
		console.log(word);
		let newArray = stars.filter(function(item){
			if(item.nome.indexOf(word) !== -1){
  				console.log("item", item);
  				return item;
  			}
		});

		this.setState({word: event.target.value, filteredArray: newArray});
	},

	render(){
		return (
			
			<div className="">
				<input type="text" onChange={this.search} value={this.state.word}/> : <label>{this.state.word}</label>
				<hr/>

				<TableSima rows={this.state.filteredArray}  />
			</div>
			
			);
	}

});


export default GridSima;


